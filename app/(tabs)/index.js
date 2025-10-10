import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddUserOrTodoModal from "../../components/AddUserOrTodoModal";
import BtnAddTodo from "../../components/BtnAddTodo";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import UserAvatar from "../../components/UserAvatar";
import constants from "../../constants/colors";
import { loadTodosV1, saveUserTodos,clearStorage } from "../../storage/storage";

const colors=constants.colors;

export default function Index() {

  // states
const [modalVisible,setModalVisible]=useState(false);
const [todo,setTodo]=useState("");
const [user,setUser]=useState("");
const [dialogType,setDialogType]=useState("todo");// "todo" or "user"
const [todosList,setTodosList]=useState([]); // liste des todos
const [usersList,setUsersList]=useState([]); // liste des users

useEffect(()=>{
  // clearStorage()
  const fetchTodos = async ()=>{
    try {
      const loadedTodosObject = await loadTodosV1();
      console.log("loadedTodosObject",loadedTodosObject.todos)
      /// je suis ici ppppbbbbbbbbbbbbbbbbbbbbbbbbbbbpbppbpbpb
      const loadedTodos = Array.isArray(loadedTodosObject.todos)? loadedTodosObject.todos:[]
      setTodosList(loadedTodos);
      return true
    }catch(e){
      console.warn("Erreur dans fetchTodos",e)
      return false
    }    
  }
  fetchTodos();   

},[])

// functions
const toggleModal=(e)=>{
  setModalVisible(e);
}

const toggleDialogType=(e)=>{
  setDialogType(e);
}

const onChangeTodo = (e) => setTodo(e); // cette fonction est pour gerer le onChangeText dans le AppDialog
const onChangeUser = (e) => setUser(e); // cette fonction est pour gerer le onChangeText dans le AppDialog

const addTodo = () => {
      // on enleve les espaces avant et apres le todo
      const newTodo = (todo || "").trim();
      if(!newTodo) {
        setModalVisible(false);
        return;
      }
     const newTodoList = [...todosList,newTodo]
    // const todosListObject = {todos:[...newTodosList]} 
     // setTodosList((prevTodosList)=>[...prevTodosList, newTodo]);
     setTodosList(newTodoList); 
     saveUserTodos(null,newTodo);
     setTodo('');
     setModalVisible(false);
    // apres avoir mis a jour le state on sauvegarde les todos dans le asynstorage et firebase
     
    
  }
  const addUser = () => {
      // on enleve les espaces avant et apres le user
      const newUser = (user || "").trim();
      if(!newUser) {
        setModalVisible(false);
        return;
      }
      setUsersList((prevUsersList) => [...prevUsersList, newUser]);
      setUser('');
      setModalVisible(false);
    // apres avoir mis a jour le state on sauvegarde les todos dans le asynstorage et firebase
    
  }        

  return (
    <SafeAreaProvider style={styles.container}>
      <Header/>
      <Divider/>
      <UserAvatar toggleModal={toggleModal}toggleDialogType={toggleDialogType} user={user} usersList={usersList}/>
      <TodoList usersList={usersList} todosList={todosList}/>
      <BtnAddTodo modalVisible={modalVisible} toggleModal={toggleModal} 
        dialogType={dialogType} toggleDialogType={toggleDialogType}
      />    
    <AddUserOrTodoModal modalVisible={modalVisible} toggleModal={toggleModal} todo={todo} dialogType={dialogType}
    onChangeTodo={onChangeTodo} onChangeUser={onChangeUser} user={user} addUser={addUser} addTodo={addTodo} 
    usersList={usersList} todosList={todosList}
    />  
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.primary,    
    flex:1,    
  },
});

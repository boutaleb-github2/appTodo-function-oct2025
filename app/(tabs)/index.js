import { useState } from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddUserOrTodoModal from "../../components/AddUserOrTodoModal";
import BtnAddTodo from "../../components/BtnAddTodo";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import UserAvatar from "../../components/UserAvatar";
import constants from "../../constants/colors";
const colors=constants.colors;


export default function Index() {

  // states
const [modalVisible,setModalVisible]=useState(false);
const [todo,setTodo]=useState("");
const [user,setUser]=useState("");
const [dialogType,setDialogType]=useState("todo");// "todo" or "user"

// functions
const toggleModal=(e)=>{
  setModalVisible(e);
}
const toggleDialogType=(e)=>{
  setDialogType(e);
}
const onChangeTodo = (e) => setTodo(e); // cette fonction est pour gerer le onChangeText dans le AppDialog
const onChangeUser = (e) => setUser(e); // cette fonction est pour gerer le onChangeText dans le AppDialog

  return (
    <SafeAreaProvider style={styles.container}>
      <Header/>
      <Divider/>
      <UserAvatar toggleModal={toggleModal}toggleDialogType={toggleDialogType}/>
      <TodoList/>
      <BtnAddTodo modalVisible={modalVisible} toggleModal={toggleModal} 
        dialogType={dialogType} toggleDialogType={toggleDialogType}
      />    
    <AddUserOrTodoModal modalVisible={modalVisible} toggleModal={toggleModal} todo={todo} dialogType={dialogType}
    onChangeTodo={onChangeTodo} onChangeUser={onChangeUser}
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

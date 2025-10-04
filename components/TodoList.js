import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import constants from '../constants/colors';
const colors=constants.colors;

export default function TodoList({usersList,todosList}) {
  const renderItem = ({item})=>{
    return(
    <View style={styles.viewTodo}>
            <View >
             <FontAwesome5 name="dot-circle" size={24} color="black" />
            </View>
            <View>
              <Text style={styles.title}> {item} </Text>
            </View>            
        </View>)
  }
  return (
    <View style={styles.container}>

      <FlatList 
       data = {todosList}
       keyExtractor = {(item,index)=>index.toString()}
       renderItem={renderItem}       
      />        
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    padding:20,
    backgroundColor:colors.primary,   
  },
  viewTodo:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginRight:10,
    backgroundColor:colors.white,borderRadius:10,
    marginVertical:5,
    padding:20
  
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:colors.primary,
  }
})
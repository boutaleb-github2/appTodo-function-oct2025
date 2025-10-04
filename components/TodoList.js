import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';
import constants from '../constants/colors';
const colors=constants.colors;

export default function TodoList() {
  return (
    <View style={styles.container}>      
        <View style={styles.viewTodo}>
            <View >
             <FontAwesome5 name="dot-circle" size={24} color="black" />
            </View>
            <View>
              <Text style={styles.title}> Todo 1 </Text>
            </View>            
        </View>

        <View style={styles.viewTodo}>
            <View >
             <FontAwesome5 name="circle" size={24} color="black" />
            </View>
            <View >
              <Text style={styles.title}> Todo 1 </Text>
            </View>            
        </View>
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
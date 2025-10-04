import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Pressable, StyleSheet, View } from "react-native";
import constants from '../constants/colors';
const colors=constants.colors;

export default function BtnAddTodo({toggleModal,toggleDialogType}) {
  return(
    <Pressable style={styles.container} onPress={()=>{
       toggleModal(true);
       toggleDialogType("todo");
    }}>
      <View>
        <FontAwesome5 name="plus-circle" size={30} color={colors.white} />
      </View>
    </Pressable>
  )
}
const styles=StyleSheet.create({
  container:{
    position:'absolute',    
  bottom:50,
  right:50,
    
    
    },

})
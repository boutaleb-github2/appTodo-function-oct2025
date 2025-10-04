import { StyleSheet, View } from "react-native";
import constants from "../constants/colors";

const colors=constants.colors;
export default function Header() {

  return (
    <View style={styles.container}> 
       
    </View>
  )  
}
const styles=StyleSheet.create({
  container:{
    
    borderBottom:'1px solid black',
    borderBottomWidth:3,
    borderBottomColor:colors.grey,
    width:'100%',
           
  },  
  
})



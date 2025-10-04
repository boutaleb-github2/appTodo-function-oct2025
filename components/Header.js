import { StyleSheet, Text, View,Platform } from "react-native";
import constants from "../constants/colors";

const colors=constants.colors;
export default function Header() {

  return (
    <View style={styles.container}> 
      <Text style={styles.title}> Mes Taches </Text>
    </View>
  )  
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:colors.primary,
    width:'100%',
    height:70,
    justifyContent:'center',
    alignItems:'flex-start',
   marginTop:Platform.OS==="android" ? 20:20,
    paddingHorizontal:20,
         
  },  
  title:{
    color:colors.white,
    fontSize:20,
    fontWeight:'bold',
    
  }
})



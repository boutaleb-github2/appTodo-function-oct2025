import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import constants from "../constants/colors";
const colors=constants.colors;

export default function UserAvatar({toggleModal,toggleDialogType}) {

  return (
    <Pressable style={styles.container} 
    onPress={()=>{
       toggleModal(true);
       toggleDialogType("user");
    }}
    >
      <View style={styles.label}>
        <Text style={styles.title}> HB </Text>
        </View>
        <View style={{ }}>
        <Text style={[styles.title,{color:colors.white,}]}> Boutaleb Habib </Text>
        </View>
        <View style={styles.chevronDown}>
        <Feather name="chevrons-down" size={24} color={colors.white} />
        </View>     
    </Pressable>
  )  
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.primary,         
  },
  label:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:colors.white,
    justifyContent:'center',
    alignItems:'center',
    margin:10
  },
  chevronDown:{
      marginRight:15
    }, 
  title:{
    color:colors.primary,
    fontSize:20,
    fontWeight:'bold',
    
  }
})



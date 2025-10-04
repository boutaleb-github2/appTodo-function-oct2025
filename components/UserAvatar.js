import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import constants from "../constants/colors";
const colors=constants.colors;

export default function UserAvatar({toggleModal,toggleDialogType,user,usersList}) {
  const labelUser = usersList[usersList.length-1]?.split(' ')
  console.log("labelUser",labelUser)
console.log("userList",usersList)
  return (
    <Pressable style={styles.container} 
    onPress={()=>{
       toggleModal(true);
       toggleDialogType("user");
    }}
    >
      <View style={styles.label}>
        <Text style={styles.title}> {labelUser ? labelUser[0][0].toString()+labelUser[1][0].toString():"--"} </Text>
        </View>
        <View style={{ }}>
        <Text style={[styles.title,{color:colors.white,}]}> {usersList[usersList.length-1]||"--"} </Text>
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



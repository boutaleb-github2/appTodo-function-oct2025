import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/colors';
const colors=constants.colors;



export default function AddUserOrTodoModal({modalVisible,toggleModal,dialogType,todo,user,onChangeTodo,onChangeUser,addTodo,addUser,usersList,todosList}) {
  // const handleOk = () => {
//   toggleModal(false);
//   dialogType==="todo" ? addTodo() : addUser();
// }

// const handleCancel = () => {
//   toggleModal(false);
//   dialogType==="todo" ? cancelAddTodo() : cancelAddUser();
// }
  return(
    
      
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  toggleModal(false);
                }}>
              <SafeAreaView style={{flex:1}}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ position: 'absolute', left: 20, top: 20 }}>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            {dialogType==="todo"?"New todo":"New user"}
                          </Text>
                    </View>
                    <View style={styles.viewTextInput}>
                          <TextInput
                            style={styles.textInput}
                            placeholder={dialogType==="todo" ? "Enter todo here" : "Enter user here"}
                            placeholderTextColor="#edab95"
                            value={dialogType==="todo"? todo:user}
                            onChangeText={dialogType==="todo" ? onChangeTodo : onChangeUser}
                          />
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: '80%',
                            justifyContent: 'flex-end',
                            marginTop: 30,
                          }}>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                              toggleModal(false);
                              dialogType==="todo" ? addTodo(): addUser();
                            }}>
                            <Text style={styles.textStyle}>{dialogType==="todo" ? "Add todo": "Add user"}</Text>
                          </Pressable>
                          <Pressable
                            style={styles.button}
                            onPress={() => {
                              toggleModal(false);
                              // dialogType==="todo" ? cancelAddTodo(): cancelAddUser();
                            }}>
                            <Text style={styles.textStyle}>cancel</Text>
                          </Pressable>
                        </View>                    
                  </View>
                </View>
              </SafeAreaView>
              </Modal>   
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'relative',
    justifyContent: 'center',
    width: '90%',
    height: 200,
    margin: 10,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 5,
    elevation: 2,
    marginHorizontal: 10,
  },

  buttonClose: {
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  textInput: {
    backgroundColor: '#fae5de',
    padding: 15,
    height: 30,
    margin: 5,
    textAlign: 'center',
    width: '100%',
    outline: 'none',
    borderRadius: 8,
  },
  viewTextInput: {
    borderColor: '#ff0000',
    borderRadius: 5,
    width: '90%',
    marginVertical: 5,
  },
});
import React from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import constants from '../constants';
import { i18n } from '../languages';

const colors = constants.colors;
export default class AppDialog extends React.Component {
  
  render() {
    const {modalVisible,dialogType,todo,inputPlaceholder,onChangeTodo,toggleModal,cancelAddTodo,addTodo,user,onChangeUser,cancelAddUser,addUser}=this.props
    return (
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          toggleModal(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {dialogType === 'todo' && (
              <>
                <View style={{ position: 'absolute', left: 20, top: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>
                    {dialogType==="todo"?"New todo":"New user"}
                  </Text>
                </View>
                <View style={styles.viewTextInput}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={inputPlaceholder}
                    placeholderTextColor="#edab95"
                    value={todo}
                    onChangeText={onChangeTodo}
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
                      toggleModal(!modalVisible);
                      addTodo();
                    }}>
                    <Text style={styles.textStyle}>{i18n.t('okText')}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      toggleModal(!modalVisible);
                      cancelAddTodo();
                    }}>
                    <Text style={styles.textStyle}>{i18n.t('cancelText')}</Text>
                  </Pressable>
                </View>
              </>
            )}

            {dialogType === 'user' && (
              <>
                <View style={{ position: 'absolute', left: 20, top: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>
                    {dialogType==="todo"?"New todo":"New user"}
                  </Text>
                </View>
                <View style={styles.viewTextInput}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={inputPlaceholder}
                    placeholderTextColor="#edab95"
                    value={user}
                    onChangeText={onChangeUser}
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
                      toggleModal(!modalVisible);
                      addUser();
                    }}>
                    <Text style={styles.textStyle}>{i18n.t('okText')}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      toggleModal(!modalVisible);
                      cancelAddUser();
                    }}>
                    <Text style={styles.textStyle}>{i18n.t('cancelText')}</Text>
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
     
    );
  }
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

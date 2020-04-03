import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Hello World!</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;

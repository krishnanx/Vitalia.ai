import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';

const CustomDialog = ({ visible, onClose, message }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onClose} style={{backgroundColor:"black"}}>
        <Dialog.Content>
          <Text style={styles.dialogText}>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#5F6061',
    fontSize: 14,
  },
});

export default CustomDialog;

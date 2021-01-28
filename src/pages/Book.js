import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";

const Book = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
      />
      <TextInput 
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="photo-camera" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.cancelButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomColor: "#f39c12",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: "#f39c12",
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#f39c12",
    alignSelf: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginBottom: 30,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  cancelButton: {
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#95a5a6",
    textDecorationLine: "underline"
  }
});

export default Book;

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = () => {
  const data = [
    {
      id: "1",
      title: "O Hobbit",
      anotation: "Livro muito bom",
      read: false,
      photo: null,
    },
    {
      id: "2",
      title: "Trono de Vidro",
      anotation: "Livro muito bom",
      read: false,
      photo: null,
    },
    {
      id: "3",
      title: "A bíblia do PHP",
      anotation: "Livro muito bom",
      read: false,
      photo: null,
    }
  ]


  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity style={styles.toolboxButton}>
          <Icon name="add" size={25} color="#ffffff"/>
        </TouchableOpacity>
      </View>
      <FlatList data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemText}>{item.title}</Text>
                  </TouchableOpacity>
                )} 
              />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  toolbox: {
    flexDirection: "row",
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    flex: 1,
    color: "#3498db"
  },
  toolboxButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16
  }

});

export default Main;

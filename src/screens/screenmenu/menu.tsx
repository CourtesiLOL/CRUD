import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  Modal,
} from 'react-native';
import menuStyle from './style/menuStyle';

interface Item {
  id: number;
  name: string;
}

function Menu(): JSX.Element {
  const [data, setData] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<string>('');
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editedItemName, setEditedItemName] = useState<string>('');

  // Función para agregar un nuevo elemento
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      // Añadir nuevo elemento
      const newItemObject: Item = {
        id: Date.now(),
        name: newItem,
      };
      setData([...data, newItemObject]);
      setNewItem('');
    }
  };

  // Función para editar un elemento existente
  const handleEditItem = () => {
    if (editedItemName.trim() !== '' && editingItemId !== null) {
      // Editar elemento existente
      const updatedData = data.map(item =>
        item.id === editingItemId ? { ...item, name: editedItemName } : item
      );
      setData(updatedData);
      setEditingItemId(null);
      setEditedItemName('');
    }
  };

  // Función para eliminar un elemento
  const handleDeleteItem = (id: number) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);

    if (editingItemId === id) {
      setEditingItemId(null);
      setEditedItemName('');
    }
  };

  return (
    <View style={menuStyle.container}>
      {/* Agregar elemento */}
      <View style={menuStyle.inputContainer}>
        <Text>Add Item:</Text>
        <TextInput
          style={menuStyle.input}
          value={newItem}
          onChangeText={text => setNewItem(text)}
          placeholder="Enter item name"
        />
        <Button title="Add" onPress={handleAddItem} color="blue" />
      </View>

      {/* Lista de elementos */}
      <View style={menuStyle.itemsContainer}>
        <Text>Items:</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={menuStyle.item}>
              <Text style={menuStyle.itemName}>{item.name}</Text>
              {/* Botón para editar elemento */}
              <View style={menuStyle.buttonsContainer}>
                <TouchableHighlight
                  style={[menuStyle.editButton, menuStyle.buttonMargin]}
                  underlayColor="#00FF00"
                  onPress={() => {
                    setEditingItemId(item.id);
                    setEditedItemName(item.name);
                  }}
                >
                  <Text style={menuStyle.editButtonText}>Edit</Text>
                </TouchableHighlight>
                {/* Botón para eliminar elemento */}
                <TouchableHighlight
                  style={menuStyle.deleteButton}
                  underlayColor="#ff0000"
                  onPress={() => handleDeleteItem(item.id)}
                >
                  <Text style={menuStyle.deleteButtonText}>Delete</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        />
      </View>

      {/* Modal de edición (visible solo cuando se está editando un elemento) */}
      {editingItemId !== null && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={true} // Siempre visible cuando hay un elemento en edición
          onRequestClose={() => {}}
        >
          <View style={menuStyle.modalContainer}>
            <Text>Edit Item:</Text>
            <TextInput
              style={menuStyle.input}
              value={editedItemName}
              onChangeText={text => setEditedItemName(text)}
              placeholder="Enter edited item name"
            />
            {/* Botón para guardar los cambios */}
            <Button title="Save" onPress={handleEditItem} color="green" />
            {/* Botón para cancelar la edición */}
            <Button title="Cancel" onPress={() => setEditingItemId(null)} color="red" />
          </View>
        </Modal>
      )}
    </View>
  );
}

export default Menu;

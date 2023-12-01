import { StyleSheet } from 'react-native';

const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  itemsContainer: {
    marginTop: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#006400',
    padding: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonMargin: {
    marginRight: 10,
  },
  // Estilos para el modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
});

export default menuStyle;

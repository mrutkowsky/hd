import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [duty, setDuty] = useState();
  const [dutiesItems, setDutiesItems] = useState([
    { key: '1', name: 'Clean the kitchen', assignedTo: '' },
  ]);

  const assignDuty = (index) => {
    const newDuties = [...dutiesItems];
    newDuties[index].assignedTo = 'You';
    setDutiesItems(newDuties);
  };

  const handleAddDuty = () => {
    setDutiesItems([...dutiesItems, {name: duty, assignedTo:''}]);
    setDuty("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Household Duties</Text>
      <FlatList
        data={dutiesItems}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemAssignedTo}>{item.assignedTo || 'Not Assigned'}</Text>
            {!item.assignedTo && (
              <TouchableOpacity onPress={() => assignDuty(index)}>
                <Text style={styles.assignButton}>Assign</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={duty} onChangeText={text => setDuty(text)} />
        <TouchableOpacity onPress={() => handleAddDuty()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
  },
  itemAssignedTo: {
    fontSize: 18,
  },
  assignButton: {
    fontSize: 18,
    color: 'blue',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth:1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth:1,
  },
});

export default App;
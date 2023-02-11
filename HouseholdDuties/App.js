import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [duties, setDuties] = useState([
    { key: '1', name: 'Clean the kitchen', assignedTo: '' },
    { key: '2', name: 'Do the laundry', assignedTo: '' },
    { key: '3', name: 'Take out the trash', assignedTo: '' },
    { key: '4', name: 'Sweep the floor', assignedTo: '' },
  ]);

  const assignDuty = (index) => {
    const newDuties = [...duties];
    newDuties[index].assignedTo = 'You';
    setDuties(newDuties);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Household Duties</Text>
      <FlatList
        data={duties}
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
});

export default App;
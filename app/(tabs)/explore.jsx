import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Importing Ionicons for button icon

export default function Explore(props) {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
    

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        
        <TextInput
          style={styles.input}
          placeholder='Search...'
          placeholderTextColor="#aaa"  // Lighter color for placeholder
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow(!show)} />
    </View>
  );
};

const styles = StyleSheet.create({
 
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    color: '#333',
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  clearButton: {
    paddingLeft: 8,
  },
});


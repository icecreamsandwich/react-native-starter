import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const HomeButton = (props) => (
    <TouchableHighlight style={styles.button} onPress={props.onPress} underlayColor="#999">
          <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cccccc',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 18
  }
});

export default HomeButton
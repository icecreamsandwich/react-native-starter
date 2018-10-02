import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import BreeSerif from '../components/BreeSerif'

const SecondScreen = () => (
    <ScrollView style={styles.container}>
        <Text style={styles.contentHeading}>
            <BreeSerif>Page two heading</BreeSerif>
        </Text>
        <Text style={styles.contentPageBody}>
        This is second page !!
        </Text>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
      padding: 15
    },
    contentPageBody: {
      fontSize: 16
    },
    contentHeading: {
      fontSize: 25,
      lineHeight: 24,
      marginBottom: 10,
      color: '#f95c13',
    }
  });

export default SecondScreen
import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import BreeSerif from '../components/BreeSerif'

const FirstContentScreen = () => (
    <ScrollView style={styles.container}>
        <Text style={styles.contentHeading}>
            <BreeSerif>Page one heading</BreeSerif>
        </Text>
        <Text style={styles.contentPageBody}>
        Some body text
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

export default FirstContentScreen
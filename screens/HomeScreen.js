import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton'
import BreeSerif from '../components/BreeSerif'


const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerContent}>
            <BreeSerif>Welcome to My App! Select an option to continue.</BreeSerif>
         </Text>
      </View>

        <ScrollView style={styles.buttonContainer}>
            <HomeButton onPress={() => navigation.navigate('First')} title="First Page" />
        </ScrollView>
        <ScrollView style={styles.buttonContainer}>
            <HomeButton onPress={() => navigation.navigate('Second')} title="Second page" />
        </ScrollView>
        <ScrollView style={styles.buttonContainer}>
            <HomeButton onPress={() => navigation.navigate('Third')} title="Third page" />
        </ScrollView>
      </View>
  )
  

  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        minHeight: '100%'
    },
    header: {
        padding: 15,
        backgroundColor: '#f95c13'
    },
    headerContent: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22
    },
    buttonContainer: {
      padding: 15,
    }
  });


export default HomeScreen
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class BreeSerif extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bree-serif':
        require('../assets/BreeSerif-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
       return (
            <Text>
                {this.state.fontLoaded ? (
                <Text style={styles.contentHeading}>
                    {this.props.children}
                </Text>
                ) : null}  
            </Text>      

     );
  }
}

const styles = StyleSheet.create({
    contentHeading: {
        fontFamily: 'bree-serif'
      }
});
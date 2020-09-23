import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Link = (props) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, props.style)}
  />
);

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>嘿嘿胜多负少</Text>
        </View>
        <Text style={styles.text}>
          This is an example of an app built with{' '}
          <Link href="https://github.com/facebook/create-react-app">
            Create React App
          </Link>{' '}
          and{' '}
          <Link href="https://github.com/necolas/react-native-web">
            React Native for Web
          </Link>
        </Text>
        <Text style={styles.text}>
          To get started, edit{' '}
          <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
            src/App.js
          </Link>
          .
        </Text>
        <Button onPress={() => {}} title="Example button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    lineHeight: 15,
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  link: {
    color: '#1B95E0',
  },
  code: {
    fontFamily: 'monospace, monospace',
  },
});

export default App;

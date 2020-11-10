/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import UsersListing from './src/view/usersList';
class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <UsersListing />
      </SafeAreaView>
    );
  }
}

export default App;

/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/home';
import DetailView from './src/components/detailView';
import Loader from './src/components/loader';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Home />
        <DetailView />
        <Loader />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import {useSelector} from 'react-redux';

export default function Loader(props) {
  const loading = useSelector(state => state.song.loading);
  return (
    <Modal transparent visible={loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#f20000" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(118, 120, 122, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

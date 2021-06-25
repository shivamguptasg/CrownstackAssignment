/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSongList, setLoading} from '../../redux/songSlice';
import SongCard from '../../components/songCard';

export default function Home() {
  const dispatch = useDispatch();
  const songList = useSelector(state => state.song.songList);

  React.useEffect(() => {
    dispatch(setLoading(true));
    fetch('https://itunes.apple.com/search?term=Michael+jackson', {
      method: 'GET',
      headers: {'Content-type': 'application/json;charset=UTF-8'},
    })
      .then(response => response.json())
      .then(res => dispatch(setSongList(res.results)))
      .catch(err => dispatch(setLoading(false)));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={songList}
        renderItem={data => <SongCard {...data.item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
});

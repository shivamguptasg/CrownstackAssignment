/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setCurrentSong} from '../../redux/songSlice';

export default function SongCard(props) {
  const {
    artworkUrl100,
    collectionName,
    collectionPrice,
    trackTimeMillis,
    trackName,
  } = props;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.songContainer}
      onPress={() => dispatch(setCurrentSong(props))}>
      <Image
        style={styles.image}
        source={{
          uri: artworkUrl100,
        }}
      />
      <View style={styles.detailsContainer}>
        <Text
          numberOfLines={1}
          style={styles.heading}>{`Collection : ${collectionName}`}</Text>
        <Text style={styles.heading}>
          Track : <Text style={styles.label}>{trackName}</Text>
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.heading}>
            Price :{' '}
            <Text
              style={[
                styles.label,
                {
                  color: '#001aff',
                },
              ]}>
              ${collectionPrice}
            </Text>
          </Text>
          <Text style={styles.heading}>
            Duration :{' '}
            <Text
              style={[
                styles.label,
                {
                  color: '#f20000',
                },
              ]}>{`${Math.round(trackTimeMillis / 6000)} Mins`}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {height: 90, width: 90},
  detailsContainer: {flex: 1, justifyContent: 'space-around', marginLeft: 5},
  heading: {
    color: '#000',
    fontWeight: 'bold',
  },
  priceContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    color: 'green',
    fontWeight: 'normal',
  },
});

/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showDetails} from '../../redux/songSlice';

export default function DetailView(props) {
  const dispatch = useDispatch();
  const showDetailsView = useSelector(state => state.song.showDetailView);
  const selectedSong = useSelector(state => state.song.selectedSong);
  return (
    <Modal transparent visible={showDetailsView}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch(showDetails(false))}>
          <Text style={styles.button}>X</Text>
        </TouchableOpacity>
        <View style={styles.subCntainer}>
          <Image
            style={styles.image}
            source={{
              uri: selectedSong.artworkUrl100,
            }}
            resizeMode="contain"
          />
          <View style={{width: '100%'}}>
            <Text
              style={
                styles.heading
              }>{`Collection : ${selectedSong.collectionName}`}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.heading}>
                Artist :{' '}
                <Text
                  style={[
                    styles.label,
                    {
                      color: '#f20000',
                    },
                  ]}>
                  {selectedSong.artistName}
                </Text>
              </Text>
              <Text style={styles.heading}>
                Country :{' '}
                <Text
                  style={[
                    styles.label,
                    {
                      color: '#f20000',
                    },
                  ]}>
                  {selectedSong.country}
                </Text>
              </Text>
            </View>
            <Text style={styles.heading}>
              Type :{' '}
              <Text
                style={[
                  styles.label,
                  {
                    color: '#001aff',
                  },
                ]}>
                {selectedSong.kind}
              </Text>
            </Text>
            <Text style={styles.heading}>
              Track : <Text style={styles.label}>{selectedSong.trackName}</Text>
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
                  ${selectedSong.collectionPrice}
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
                  ]}>{`${Math.round(
                  selectedSong.trackTimeMillis / 6000,
                )} Mins`}</Text>
              </Text>
            </View>
          </View>
        </View>
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
  subCntainer: {
    backgroundColor: '#fff',
    width: '95%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  image: {height: 120, width: 120, margin: 10},
  detailsContainer: {flex: 1, justifyContent: 'space-around', marginLeft: 5},
  heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 5,
  },
  priceContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    color: 'green',
    fontWeight: 'normal',
    fontSize: 17,
  },
  buttonContainer: {
    width: '95%',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f20000',
    fontSize: 20,
    color: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

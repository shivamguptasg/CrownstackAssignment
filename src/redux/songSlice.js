import {createSlice} from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    loading: false,
    selectedSong: {},
    songList: [],
    showDetailView: false,
  },
  reducers: {
    setSongList: (state, action) => {
      return {
        ...state,
        loading: false,
        songList: action.payload,
      };
    },
    setCurrentSong: (state, action) => {
      return {
        ...state,
        showDetailView: true,
        selectedSong: action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    showDetails: (state, action) => {
      return {
        ...state,
        showDetailView: action.payload,
      };
    },
  },
});

export const {setSongList, setCurrentSong, setLoading, showDetails} =
  songSlice.actions;

export default songSlice.reducer;

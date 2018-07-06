/*
 *
 * BookList reducer
 *
 */

import { fromJS } from 'immutable';
import img1 from 'images/51Aaht4mEzL._SY375_.jpg';
import img2 from 'images/51AxMA7GYcL._SY375_.jpg';
import img3 from 'images/51Zp2PkPeCL._SY375_.jpg';
import img4 from 'images/51lE06DzmzL._PJku-sticker-v7,TopRight,0,-50._SY375_.jpg';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS([
  {
    title: 'The Unmumsy Mum',
    rating: 5,
    imageSrc: img1,
  },
  {
    title:
      "Gracie's Secret: A heartbreaking page turner that will stay with you forever",
    rating: 4.5,
    imageSrc: img2,
  },
  {
    title: 'The Tattooist of Auschwitz',
    rating: 4.6,
    imageSrc: img3,
  },
  {
    title: 'MURDER OF A LOVER a gripping crime...',
    rating: 4.6,
    imageSrc: img4,
  },
]);

function bookListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default bookListReducer;

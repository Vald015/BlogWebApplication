import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
     //console.log(_.mapKeys(action.payload.data,'id'));
      return _.mapKeys(action.payload.data,'id');
      //console.console.log(action.payload.data);  //[ posts1, posts2 ]
      //{ 4: posts }
    default:
      return state;
  }
}

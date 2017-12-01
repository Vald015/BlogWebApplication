import { FETCH_POSTS } from '../actions';

export default function (state = {},action){
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.paylaod.data,'id');
      //console.console.log(action.payload.data);  //[ posts1, posts2 ]
      //{ 4: posts }
  default:
    return state;
  }
}

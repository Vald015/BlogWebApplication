import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JUMPTYSON1234';

export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  //console.log(values);
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  //console.log(request);
  return{
    type: CREATE_POST,
    payload: request
  };
}

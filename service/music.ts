import request from '../utils/request';
import axios from 'axios';
// params: object
export async function queryList() {
  return request(`http://localhost:9002/music/query`, {
    method: 'GET',
    // query: params, http://localhost:9002/music/query https://api.github.com/users/binyellow
  })
}
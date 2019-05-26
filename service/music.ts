import request from '../utils/request';

export async function queryList() {
  return request(`http://localhost:9002/music/query`, {
    method: 'GET',
    // query: params, http://localhost:9002/music/query https://api.github.com/users/binyellow
  })
}
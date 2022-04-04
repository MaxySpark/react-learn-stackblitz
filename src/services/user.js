import http from 'axios';

const getUsers = async () => {
  return http.get('https://jsonplaceholder.typicode.com/users');
};

const userServices = {
  getUsers,
};
export default userServices;

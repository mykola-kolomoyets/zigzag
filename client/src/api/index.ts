import axios from "axios";

export const defaultHeader = {
    'Content-type': 'application/json'
};

export const AuthHeader = () => ({
    ...defaultHeader,
    'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
});

export default axios.create({
  baseURL: `https://project-zigzag.herokuapp.com/api/v1`,
  headers: {
    'Content-type': 'application/json'
  }
});

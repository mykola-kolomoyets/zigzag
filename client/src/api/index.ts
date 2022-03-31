import axios from "axios";

export const defaultHeader = {
    'Content-type': 'application/json'
};

export const AuthHeader = () => ({
    ...defaultHeader,
    'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
});

export default axios.create({
  baseURL: `http://localhost:${process.env.PORT || 4000}/api/v1`,
  headers: {
    'Content-type': 'application/json'
  }
});

export const store = {
  auth: {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
    userId: localStorage.getItem('userId'),
  },
};

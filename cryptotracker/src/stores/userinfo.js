// Get the user information from localStorage if available
const useremail = localStorage.getItem('useremail') || null;
const userpassword = localStorage.getItem('userpassword') || null;

// Set the initial user information
const userinfo = {
  username: null,
  useremail,
  userpassword,
  usercurrency: 'USD',
  usercurrencyfull: 'US Dollar',
  admin: false
};

export default userinfo;

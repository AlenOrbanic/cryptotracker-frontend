import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('user', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  updateUserCurrency(userCurrencyData) {
    return Api().post('updateUserCurrency', userCurrencyData);
  },
  // Add the uploadProfilePicture method
  uploadProfilePicture(formData) {
    return Api().post('uploadProfilePicture', formData);
  },
  getProfilePicture(useremail) {
    return Api().get(`profilePictures/${useremail}.jpg`, { responseType: 'blob' });
  }
};
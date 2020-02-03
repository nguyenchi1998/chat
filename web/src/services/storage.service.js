const TOKEN_KEY = 'token';

const TokenService = {
  getToken() {
    return sessionStorage.getItem(TOKEN_KEY)
  },

  saveToken(accessToken) {
    sessionStorage.setItem(TOKEN_KEY, accessToken)
  },

};

export { TokenService };

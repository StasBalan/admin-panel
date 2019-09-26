import { STORAGE_KEYS } from "../constants";

const authorization = {
  isAuthorized: !!localStorage.getItem(STORAGE_KEYS.USER),

  getUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
    } catch(e) {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  },

  login(user) {
    this.isAuthorized = true;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  logout() {
    this.isAuthorized = false;
    localStorage.removeItem(STORAGE_KEYS.USER);
  },
}

export default authorization;
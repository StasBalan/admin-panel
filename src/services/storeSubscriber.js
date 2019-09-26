import store from '../store';

import authorization from './authorization';

const updateToken = ({ user: { user }}) => {
  if (user && user.token) {
    return authorization.login(user);
  }

  return authorization.logout();
};

export default () => {
  updateToken(store.getState());
};
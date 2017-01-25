module.exports = {
  userAlreadyExists(users, user) {
    let exists = false;

    users.forEach((_user) => {
      if (_user.firstname === user.firstname && _user.surname === user.surname) {
        exists = !exists;
      }
    });

    return exists;
  }
};

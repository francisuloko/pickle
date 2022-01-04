const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.auth_token) {
    return {
      Authorization: user.auth_token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
  return {};
};

export default authHeader;

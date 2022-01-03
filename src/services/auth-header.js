const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.auth_token) {
    return { Authorization: user.auth_token };
  }
  return {};
};

export default authHeader;

function Login() {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <>
          <div>Thông tin người dùng, nút logout</div>
        </>
      ) : (
        <>
          <div>Nút đăng nhập, Nút đăng ký</div>
        </>
      )}

      {isLogin && <div>Avatar</div>}
    </>
  );
}

export default Login;

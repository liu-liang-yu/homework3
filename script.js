// 顯示或隱藏密碼
document.getElementById('showPwd').addEventListener('change', function () {
  const pwd = document.getElementById('password');
  pwd.type = this.checked ? 'text' : 'password';
});

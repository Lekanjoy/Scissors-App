export function revealPassword(password) {
  if (password.current.type === "password") {
    password.current.type = "text";
    setTimeout(() => {
      password.current.type = "password";
    }, 500);
  } else {
    password.current.type = "password";
  }
}

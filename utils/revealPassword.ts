import { RefObject } from "react";

export function revealPassword(password: RefObject<HTMLInputElement>) {
  if (password.current?.type === "password") {
    password.current.type = "text";
    setTimeout(() => {
      if (password.current) {
        password.current.type = "password";
      }
    }, 500);
  } else {
    if (password.current) {
      password.current.type = "password";
    }
  }
}

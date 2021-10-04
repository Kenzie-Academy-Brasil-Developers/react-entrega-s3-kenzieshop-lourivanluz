import { toast } from "react-toastify";
import { userRegister, userLogin } from "./actions";

export const userRegisterThunk = (user) => (dispath) => {
  const { nome, email, password } = user;

  localStorage.setItem("user", JSON.stringify(user));
  dispath(userRegister({ nome: nome, email: email, password: password }));
};

export const userLoginThunk = (usuario,setIsLogged) => (dispath, getStore) => {
  const { user } = getStore();
  if (user.password === usuario.password && user.email === usuario.email) {
    user.auth = true
    localStorage.setItem("user", JSON.stringify(user));
    setIsLogged(true)
    return dispath(userLogin({...user}));
  }
  toast.error("Usuario não registrado");
};

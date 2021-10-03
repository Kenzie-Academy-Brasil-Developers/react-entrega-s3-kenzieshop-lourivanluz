import { USER_REGISTER, USER_LOGIN } from "./actionsType";
const defultUser = JSON.parse(localStorage.getItem("user")) || {
  nome: "",
  email: "",
  password: "",
}; // verificar se ja tem no localStore

export const userReduce = (state = defultUser, { type, value }) => {
  switch (type) {
    case USER_REGISTER:
      return value;
    case USER_LOGIN:
      return value;
    default:
      return state;
  }
};

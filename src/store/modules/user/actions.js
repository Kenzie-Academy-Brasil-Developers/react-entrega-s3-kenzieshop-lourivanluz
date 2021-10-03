import { USER_REGISTER, USER_LOGIN } from "./actionsType";

export const userRegister = (user) => ({ type: USER_REGISTER, value: user });
export const userLogin = (user) => ({ type: USER_LOGIN, value: user });

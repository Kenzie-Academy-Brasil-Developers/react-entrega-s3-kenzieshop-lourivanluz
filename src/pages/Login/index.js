import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { userLoginThunk } from "../../store/modules/user/thunk";
import { DivStyled } from "./syle";

export const Login = () => {
  const history = useHistory();
  const dispath = useDispatch();
  const [email, setEmeil] = useState("");
  const [password, setPassoword] = useState("");
  const [isLogged,setIsLogged] = useState(false)

  const handleLogin = (email, senha) => {
    const login = {
      email: email,
      password: senha,
    };

    dispath(userLoginThunk(login,setIsLogged));
  };

  if(isLogged){
    return <Redirect to="/"/>
  }

  return (
    <DivStyled>
      <div className="titleForm">
        <h1>Login</h1>
        <p>
          Não tem uma conta ?
          <span onClick={() => history.push("/register")}>Registre-se</span>
        </p>
      </div>

      <div className={"form"}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmeil(event.target.value)}
        />
        <TextField
          label="senha"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassoword(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleLogin(email, password)}
        >
          login
        </Button>
      </div>
      <footer>
        <p>
          * Ao se registrar, você concorda com os nossos
          <span>Termos de Uso</span>, em receber emails e atualizações do Wix e
          confirma que leu nossa <span>Política de Privacidade</span>.
        </p>
        <div>
          <div className="divider"></div>
        </div>
        <p>
          Este site é protegido pelo reCAPTCHA Enterprise e a
          <span>Política de Privacidade</span> e <span>Termos de Uso</span> do
          Google se aplicam.
        </p>
      </footer>
    </DivStyled>
  );
};

import { Button, TextField } from "@mui/material";
import { DivStyled } from "./style";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../store/modules/user/thunk";

export const Register = () => {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [passoword, setPassoword] = useState("");

  const dispath = useDispatch();

  const handleRegister = (nome, email, passoword) => {
    const user = {
      nome: nome,
      email: email,
      password: passoword,
    };
    dispath(userRegisterThunk(user));
    history.push("/login");
  };

  return (
    <DivStyled>
      <div className="titleForm">
        <h1>Cadastre-se</h1>
        <p>
          Já tem uma conta ?
          <span onClick={() => history.push("/login")}>Login</span>
        </p>
      </div>

      <div className={"form"}>
        <TextField
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="senha"
          variant="outlined"
          type="password"
          value={passoword}
          onChange={(event) => setPassoword(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleRegister(nome, email, passoword)}
        >
          Registrar-se
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

import React, { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";

export default function Login(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const prevPath = get(props, "location.state.prevPath", "/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!validator.isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido.");
    }
    if (password.length < 6 || password.length > 30) {
      formErrors = true;
      toast.error("Campo nome deve ter entre 6 e 30 caracteres.");
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              id="nome"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </Form>
    </Container>
  );
}

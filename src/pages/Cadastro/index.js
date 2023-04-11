import React, { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import Loading from "../../components/Loading";
import * as actions from "../../store/modules/auth/actions";

export default function Cadastro() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error("Campo nome deve ter entre 3 e 250 caracteres.");
    }
    if (!validator.isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido.");
    }
    if (password.length < 6 || password.length > 30) {
      formErrors = true;
      toast.error("Campo nome deve ter entre 6 e 30 caracteres.");
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, email, password }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        <form>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
              id="senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Criar usuário</button>
        </form>
      </Form>
    </Container>
  );
}

import React, { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import { FaEdit, FaUserCircle } from "react-icons/fa";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import Loading from "../../components/Loading";
import * as actions from "../../store/modules/auth/actions";
import axios from "../../services/axios";
import history from "../../services/history";

export default function Cadastro() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoading2, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/users`);
        const Photo = get(data, "Photos[0].url", "");

        setPhoto(Photo);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, "response.status", 0);
        const errors = get(err, "response.data.errors", [0]);

        if (status === 404) errors.map((error) => toast.error(error));
        history.push("/");
      }
    }

    getData();

    setName(nameStored);
    setEmail(emailStored);
  }, [id, nameStored, emailStored]);

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
    if (!id && (password.length < 6 || password.length > 30)) {
      formErrors = true;
      toast.error("Campo nome deve ter entre 6 e 30 caracteres.");
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, email, password, id }));
  };

  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const photoURL = URL.createObjectURL(foto);

    setPhoto(photoURL);

    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("photo", foto);

    setIsLoading(true);
    try {
      console.log(formData);
      await axios.post("/photos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Foto atualizada com sucesso.");

      setIsLoading(false);
    } catch (err) {
      const { status } = get(err, "response", "");
      toast.error("Erro ao atualizar a foto.");

      if (status === 401) dispatch(actions.loginFailure());

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading2} />

      <Form onSubmit={handleSubmit}>
        <h1>Editar conta</h1>

        <form>
          <label htmlFor="photo" className="labelphoto">
            {photo ? (
              <img src={photo} alt="Foto do usuário" crossOrigin="" />
            ) : (
              <FaUserCircle size={150} />
            )}
            <input type="file" id="photo" onChange={handleChange} />
          </label>
          <p>Clique na foto para alterar</p>

          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
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
          <button type="submit">Salvar</button>
        </form>
      </Form>
    </Container>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { get } from "lodash";

import { FaUserCircle } from "react-icons/fa";
import axios from "../../services/axios";
import Loading from "../../components/Loading";
import { Container } from "../../styles/GlobalStyles";
import {
  Contend,
  ProfilePicture,
  Form,
  Name,
  Div,
  DivTexto,
  Message,
} from "./styled";
import history from "../../services/history";

export default function Login() {
  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [messageStored, setMessageStored] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/users`);
        const Photo = get(data, "Photos[0].url", "");
        const Msg = get(data, "Messages[0]", "");

        setMessageStored(Msg.message);
        setPhoto(Photo);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, "response.status", 0);
        const errors = get(err, "response.data.errors", [0]);

        if (status === 404) errors.map((error) => toast.error(error));
      }
    }

    getData();
    setName(nameStored);
  }, [id, nameStored]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.length > 500) {
      toast.error("A mensagem deve ter menos que 500 caracteres.");
      return;
    }

    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("message", message);

    try {
      setIsLoading(true);
      await axios.post("/messages", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Mensagem com sucesso.");

      setIsLoading(false);
      history.push("/");
      setTimeout(() => {
        history.push("/profile");
      }, 1);
    } catch (err) {
      const { status } = get(err, "response", "");
      toast.error("Erro ao atualizar a mensagem.");

      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Contend>
        <Div>
          <ProfilePicture>
            {photo ? (
              <img src={photo} crossOrigin="" alt="" />
            ) : (
              <FaUserCircle className="teste" />
            )}
          </ProfilePicture>

          <Name>{name}</Name>
        </Div>
        <DivTexto>
          <Form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="Deixe uma frase ou mensagem aqui."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Salvar</button>
          </Form>

          <Message>
            <h3>Mensagem</h3>
            <p>{messageStored || "Você ainda não deixou nenhuma mensagem."}</p>
          </Message>
        </DivTexto>
      </Contend>
    </Container>
  );
}

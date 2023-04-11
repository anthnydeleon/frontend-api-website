import React from "react";

import { FaListUl } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HeaderNav, Nav, NewLink, ButtonNav } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const active = e.currentTarget.nextSibling;

    if (active.hasAttribute("id")) {
      active.removeAttribute("id");
      return;
    }

    active.setAttribute("id", "active");
  };

  const handleLogout = (e) => {
    dispatch(actions.loginFailure());
    toast.success("Sessão encerrada.");
  };

  return (
    <HeaderNav>
      <Nav>
        <NewLink to="/">HOME</NewLink>
        <ButtonNav onClick={(e) => handleClick(e)}>
          <FaListUl size={25} color="#fff" cursor="pointer" />
        </ButtonNav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <NewLink to="/profile">PERFIL</NewLink>
              </li>
              <li>
                <NewLink to="/account">PRIVACIDADE</NewLink>
              </li>
              <li>
                <NewLink to="/" onClick={handleLogout}>
                  SAIR
                </NewLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NewLink to="/signup">CADASTRE-SE</NewLink>
              </li>
              <li>
                <NewLink to="/login">LOGIN</NewLink>
              </li>
            </>
          )}
        </ul>
      </Nav>
    </HeaderNav>
  );
}

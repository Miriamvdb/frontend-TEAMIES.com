import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { NavLink } from "react-router-dom";
import { LogoutButton, Text } from "../styled";

export const Navbar = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const userName = user ? user.firstName : "";
  const isAdmin = user ? user.isAdmin : "";

  return (
    <Nav>
      <Link to="/">
        <Logo>
          TEAMIES<span>.com</span>
        </Logo>
      </Link>
      <div>
        {token ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.25rem",
              alignItems: "baseline",
              paddingBottom: "0rem",
            }}
          >
            {isAdmin ? <LinkPending to="/admin">Admin</LinkPending> : null}
            <Text>
              Welcome <b>{userName}</b>
            </Text>
            <LogoutButton onClick={() => dispatch(logOut())}>
              Logout
            </LogoutButton>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  margin-top: -2.5rem;
  width: 100%;
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Link = styled(NavLink)`
  padding-right: 8.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #00bfff;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #59d6ff;
  }
`;

const LinkPending = styled(NavLink)`
  padding-right: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #00bfff;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #59d6ff;
  }
`;

const Logo = styled.h1`
  margin-left: 40%;
  margin-right: 1rem;
  color: "#00bfff";
  text-decoration: none;
  font-weight: 800;
  font-size: 6rem;

  span {
    font-size: 1.5rem;
  }
`;

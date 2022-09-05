import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <Nav>
      <Link to="/">
        <Logo>
          TEAMIES<span>.com</span>
        </Logo>
      </Link>
      <div>
        {token ? (
          <button onClick={() => dispatch(logOut())}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 3.5rem 9rem 0rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Link = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #00bfff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #59d6ff;
  }
`;

const Logo = styled.a`
  padding: 0 2rem 0 10rem;
  color: "#00bfff";
  text-decoration: none;
  font-weight: 800;
  font-size: 6rem;

  span {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

// const Hamburger = styled.div`
//   display: none;
//   flex-direction: column;
//   cursor: pointer;
//   span {
//     height: 2px;
//     width: 25px;
//     background-color: #ececec;
//     margin-bottom: 4px;
//     border-radius: 5px;
//   }

//   @media (max-width: 780px) {
//     display: flex;
//   }
// `;

// const Menu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
// `;

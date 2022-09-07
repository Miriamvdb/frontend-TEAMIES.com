import {
  ButtonForm,
  Input,
  TitleCenter,
  LinkWord,
  MainContainer,
  Form,
  TextCenter,
} from "../styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <MainContainer>
        <TitleCenter>Login</TitleCenter>
        <Form onSubmit={submitForm}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <ButtonForm type="submit">Login</ButtonForm>
        </Form>
        <TextCenter>
          Don't have an account yet? Click{" "}
          <Link to="/signup" style={LinkWord}>
            <b>here</b>
          </Link>{" "}
          to sign up
        </TextCenter>
      </MainContainer>
    </div>
  );
};

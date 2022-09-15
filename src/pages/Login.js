import {
  ButtonForm,
  Input,
  TitleH1,
  LinkWord,
  MainContainer,
  Form,
  Text,
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
      <MainContainer
        style={{
          overflow: "scroll",
          height: "61vh",
        }}
      >
        <TitleH1>Login</TitleH1>
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
          <Text>
            Don't have an account yet? Click{" "}
            <Link to="/signup" style={LinkWord}>
              <b>here</b>
            </Link>{" "}
            to sign up
          </Text>
          <ButtonForm type="submit">Login</ButtonForm>
        </Form>
      </MainContainer>
    </div>
  );
};

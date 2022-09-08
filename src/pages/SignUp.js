import {
  ButtonForm,
  Form,
  ImgXs,
  Input,
  MainContainer,
  Select,
  TitleCenter,
} from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [line, setLine] = useState("");
  const [position, setPosition] = useState("");
  const [backNumber, setBackNumber] = useState("");
  const [image, setImage] = useState(
    "https://welderen.e-golf4u.nl/leden/iframe/img/no-profile-image.jpg"
  );

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
    dispatch(
      signUp(
        firstName,
        lastName,
        email,
        password,
        line,
        position,
        backNumber,
        image
      )
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <MainContainer>
        <TitleCenter>Sign Up</TitleCenter>
        <Form
          onSubmit={submitForm}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Input
            style={{
              flex: 1,
            }}
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            style={{
              flex: 2,
            }}
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.25rem",
            }}
          >
            <Select
              style={{
                flex: 3,
              }}
              type="select"
              value={line}
              onChange={(e) => setLine(e.target.value)}
              required
            >
              <option value="">Select line</option>
              <option>Staff</option>
              <option>Goal</option>
              <option>Defense</option>
              <option>Midfield</option>
              <option>Attack</option>
            </Select>
            {line === "Staff" ? (
              <Select
                style={{
                  flex: 3,
                }}
                type="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select position</option>
                <option>Coach</option>
                <option>Beer deliverer</option>
              </Select>
            ) : null}
            {line === "Goal" ? (
              <Select
                style={{
                  flex: 3,
                }}
                type="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select position</option>
                <option>Goalkeeper</option>
              </Select>
            ) : null}
            {line === "Defense" ? (
              <Select
                style={{
                  flex: 3,
                }}
                type="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select position</option>
                <option>Right defender</option>
                <option>Central defender</option>
                <option>Left defender</option>
              </Select>
            ) : null}
            {line === "Midfield" ? (
              <Select
                style={{
                  flex: 3,
                }}
                type="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select position</option>
                <option>Right midfielder</option>
                <option>Central midfielder</option>
                <option>Left midfielder</option>
              </Select>
            ) : null}
            {line === "Attack" ? (
              <Select
                style={{
                  flex: 3,
                }}
                type="select"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select position</option>
                <option>Right attacker</option>
                <option>Striker</option>
                <option>Left attacker</option>
              </Select>
            ) : null}

            <Input
              style={{
                flex: 0.5,
              }}
              type="text"
              placeholder="#"
              value={backNumber}
              onChange={(e) => parseInt(setBackNumber(e.target.value))}
              required
            />
          </div>
          <Input
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {image ? (
            <ImgXs src={image} alt={firstName} style={{ marginTop: "2rem" }} />
          ) : null}
          <br />
          <ButtonForm type="submit">Sign Up</ButtonForm>
        </Form>
      </MainContainer>
    </div>
  );
};

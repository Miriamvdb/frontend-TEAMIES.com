import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, MessageBox } from "./components";
import { Dashboard, Login, SignUp } from "./pages";
import { selectToken } from "./store/user/selectors";

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    if (token === null && location.pathname !== "/signup") {
      navigate("/login");
    }
  }, [dispatch, token, navigate]);

  return (
    <div>
      <Navbar />
      <MessageBox />
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <></>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

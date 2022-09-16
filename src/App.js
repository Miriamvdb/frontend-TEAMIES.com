import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, MessageBox, Footer } from "./components";
import { Dashboard, Login, SignUp, Admin, SignUpSuccess } from "./pages";
import { selectToken, selectUser } from "./store/user/selectors";

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const isAdmin = user ? user.isAdmin : "";

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    if (
      token === null &&
      location.pathname !== "/signup" &&
      location.pathname !== "/signupsuccess"
    ) {
      navigate("/login");
    }
  }, [dispatch, token, navigate, location.pathname]);

  return (
    <div>
      <Navbar />
      <MessageBox />
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <></>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <></>} />
        <Route path="/signupsuccess" element={<SignUpSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
};

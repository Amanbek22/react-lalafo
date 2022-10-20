import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/title/Title";
import css from "./LoginPage.module.css";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    alert(login + password);
    if(login === 'admin' && password === 'admin') {
      navigate('/dashboard')
    } else {
      setError("Login or Password is incorect. Please try again!")
    }
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
    setError("")
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setError("")
  }

  return (
    <div className="page">
      <Title position="center">Войти</Title>
      <form className={css.form} onSubmit={submit}>
        <input value={login} onChange={handleLoginChange} className={css.input} type="text" placeholder="Login" />
        <input value={password} onChange={handlePasswordChange} className={css.input} type="password" placeholder="Password" />
        <button className={css.button}>Войти</button>
        <div className="error-message">{error}</div>
      </form>
    </div>
  );
}

export default LoginPage;

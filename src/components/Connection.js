import { useState } from 'react';
import '../style/style.css'

const Connection = () => {
  const API_URL = process.env.REACT_APP_API_URL2
  const [loginUser, setLoginUser] = useState({
    login: '',
    password: ''
  });
  const [user, setUser] = useState('')

  const handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setLoginUser(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/login`,
      {
        method: "POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => res.json())
      .then((res) => {
        setUser(res)

      });
    console.log("connected")
  };

  return (
    <div className="ConnectionPage">
      <h1 className="ConnectionTitle">CONNEXION</h1>
      <form
        action=""
        method="post"
        className="FormConnection"
        onSubmit={handleSubmit}>

        <div
          className='ConnectionUser'>
          <label
            htmlFor="user"
            className="LabelUser">Identifiant :
          </label>
          <input
            type="text"
            id="user"
            name="login"
            placeholder="Identifiant"
            value={loginUser.login}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div
          className='ConnectionPassword'>
          <label
            htmlFor="password"
            className="PasswordUser">Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            name='password'
            placeholder="Mot de passe"
            value={loginUser.password}
            onChange={handleChange}
          ></input>
          <br />
        </div>
        <div
          className="ConnectionValidate">
          <button
            type="submit"
            className="ConnectionButton"
          >Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connection;
import { useState } from 'react'
import backgroundImage from '../../assets/background.jpg'
import './style.css'

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChangeForm(event) {

  }

  return (
    <div className="container">
      <div className='left'>
        <h1>Cadastre-se</h1>
        <form>
          <input
            name='name'
            type="text"
            placeholder='Name'
            value={form.name}
            onChange={(event) => handleChangeForm(event)}
          />
          <input
            name='email'
            type="text"
            placeholder='Email'
            value={form.email}
            onChange={(event) => handleChangeForm(event)}
          />
          <input
            name='password'
            type="text"
            placeholder='Password'
            value={form.password}
            onChange={(event) => handleChangeForm(event)}
          />
          <div className='container-btn'>
            <button type='submit' className=''>Cadastrar</button>
            <button type='button' className=''>Cancelar</button>
            {error && <span className='error-message'>{error}</span>}
          </div>
        </form>
        <div className='container-link'>
          <span>Já tem cadastro?</span>
          <a href="#">Clique aqui</a>
        </div>
      </div>
      <img
        className='right'
        src={backgroundImage}
        alt="background" />

    </div>
  )
}

export default SignUp

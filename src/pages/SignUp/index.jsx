import { useState } from 'react'
import BackgroundImage from '../../assets/background.jpg'
import WomanSuccess from '../../assets/woman-success.png'
import InputPassword from '../../components/InputPassword'
import Message from '../../components/Message'
import './style.css'

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os dados para se cadastrar');
      return;
    }

    setSuccess(true);
  }

  function handleChangeForm(event) {
    setError('');
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleClear() {
    setForm({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className="container">
      <div className='left'>
        {!success ?
          <div className='container-form'>
            <h1>Cadastre-se</h1>
            <form
              onSubmit={(event) => handleSubmit(event)}
            >
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

              <InputPassword
                state={form.password}
                handleChange={handleChangeForm}
              />

              <div className='container-btn'>
                <button
                  className='btn sign-up'
                  type='submit'
                >
                  Cadastrar
                </button>
                <button
                  className='btn cancel'
                  type='button'
                  onClick={() => handleClear()}
                >
                  Cancelar
                </button>
                {error && <span className='error-message'>{error}</span>}
              </div>
            </form>

            <div className='container-link'>
              <span>Já tem cadastro?</span>
              <a href="#">Clique aqui</a>
            </div>
          </div>
          :
          <Message
            message="Cadastro efetuado com sucesso!"
            image={WomanSuccess}
          />
        }
      </div>
      <img
        className='right'
        src={BackgroundImage}
        alt="background"
      />

    </div >
  )
}

export default SignUp

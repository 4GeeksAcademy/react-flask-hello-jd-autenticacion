import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

function RegisterForm() {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const inputValue = (e) => {
    const { name, value } = e.target;
    setRegister(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (register.password !== register.repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const successRegister = await actions.register(register.email, register.password);
      if (successRegister === true) {
        setSuccess('Usuario creado exitosamente');
      } else {
        setError('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Error al registrar usuario');
    }

    setRegister({
      email: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={submitForm}>
                <div className="form-outline mb-4">
                  <input 
                    type="email" 
                    id="registerEmail" 
                    name="email" 
                    className="form-control" 
                    placeholder="Enter your email" 
                    value={register.email} 
                    onChange={inputValue} 
                    required 
                  />
                  <label className="form-label pt-1" htmlFor="registerEmail">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="password" 
                    id="registerPassword" 
                    name="password" 
                    className="form-control" 
                    placeholder="Enter your password" 
                    value={register.password} 
                    onChange={inputValue} 
                    required 
                  />
                  <label className="form-label pt-1" htmlFor="registerPassword">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="password" 
                    id="registerRepeatPassword" 
                    name="repeatPassword" 
                    className="form-control" 
                    placeholder="Repeat your password" 
                    value={register.repeatPassword} 
                    onChange={inputValue} 
                    required 
                  />
                  <label className="form-label pt-1" htmlFor="registerRepeatPassword">Repeat password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-primary btn-block mb-3">Create an account</button>
                </div>

                <div className="d-flex justify-content-center pb-4">
                  <Link to="/loginForm">
                    <p className="mb-0 text-decoration-none">¿Ya tienes cuenta? <a href="#!" className="text-decoration-none">Login</a></p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
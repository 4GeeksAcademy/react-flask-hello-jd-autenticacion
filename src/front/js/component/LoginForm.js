import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

function LoginForm() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const inputValue = (e) => {
    const { name, value } = e.target;
    setLogin(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const successLogin = await actions.login(login.email, login.password);
      if (successLogin === true) {
        navigate('/homeUser');
      } else {
        setError('Error inesperado al iniciar sesión.');
      }
    } catch (err) {
      setError(err.message || 'Hubo un problema al iniciar sesión. Inténtalo de nuevo.');
      console.error('Error al iniciar sesión:', err);
    }

    setLogin({
      email: '',
      password: ''
    });
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase pb-5">Login</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={submitForm}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        value={login.email}
                        onChange={inputValue}
                      />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        name="password"
                        placeholder="Enter your password"
                        className="form-control form-control-lg"
                        value={login.password}
                        onChange={inputValue}
                      />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  </form>
                </div>
                
                <div>
                  <Link to="/signUp">
                    <p className="mb-0">Don't have an account? <a href="#!" className="ps-1">Sign Up</a></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
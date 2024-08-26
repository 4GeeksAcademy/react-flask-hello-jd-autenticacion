import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1"> 
					<strong>Tioahe</strong>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Account
						</button>
						<ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: '200px', maxWidth: '300px' }}>
							
							<li>
								<Link to="/signUp"
								className="dropdown-item" href="#">Crear cuenta
									<br />
									<small>Suscribete gratis</small>
								
								</Link>
							</li>
							<li>
								<Link to="/loginForm"
									className="dropdown-item" style={{ whiteSpace: 'normal', lineHeight: '1.2' }}>
									Acceder
									<br />
									<small>¿Ya eres miembro? Te damos la bienvenida.</small>
								</Link>
							</li>
							<li><a className="dropdown-item" href="#">Log out</a></li>
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};

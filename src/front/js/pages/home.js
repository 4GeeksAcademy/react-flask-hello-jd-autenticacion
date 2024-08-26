import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const handleModalOpen = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};
	return (
		<div
			className="p-5 text-center bg-image"
			style={{
				backgroundImage: "url('https://pbs.twimg.com/profile_banners/1229746140792475648/1702829808/1500x500')",
				height: '520px',
			}}
		>
			<div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3">Art, design & memes</h1>
						<h4 className="mb-3">📬tioahe@gmail.com <br />
						<a href="https://www.behance.net/tioahe">Behance</a></h4>
						<a
							data-mdb-ripple-init
							className="btn btn-outline-light btn-lg"
							href="#!"
							role="button"
						>
							Portafolio
						</a>
					</div>
				</div>
			</div>
		</div>

	);
};

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomeUser = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className="text-center mt-5 mx-auto">
            <h1>Bienvenido! </h1>
            
            <div className="my-5">
                <img 
                    src="https://scontent.fmad11-2.fna.fbcdn.net/v/t39.30808-6/329379541_1208569073124354_7312542187307234414_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vNNBAdgLO7cQ7kNvgFd5oqw&_nc_ht=scontent.fmad11-2.fna&oh=00_AYBmSAifO-wUsCWZ6whTWHeGbt2wHL-tto2SQDna0PZNUA&oe=66D2BF12"
                    alt="Congratulations"
                    style={{
                        maxWidth: '800%',
                        height: 'auto',
                        maxHeight: '60vh',
                        objectFit: 'contain'
                    }}
                />
            </div>
        </div>
    );
};
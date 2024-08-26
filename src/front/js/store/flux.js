const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user:{
				id: "",
				email: "",
			}
		},
		actions: {
			register: async (email, password) => {
				try{
					const response = await fetch(`${process.env.BACKEND_URL}/api/register`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password })
					});
					if(response.ok){
						const data = await response.json();
						console.log("User register successful",data);
						return true
					}else{
						console.log("Register error", errorData.message);
					}
				}catch(error){
					console.log("Register error",error);
				}
			},

			login: async (email, password) => {
				try{
					const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password })
					});

					if(response.ok){
						const data = await response.json();
						sessionStorage.setItem("token", data.access_token);
						setStore({ user: 
						{
							id: data.id,
							email: data.email
						} });
						console.log("Logged successful",data);
						return true;	
					}else{
						console.log("Error login", errorData.message);
						return false;
					}
				}catch(error){
					console.log("Error login",error);
					return false;
				}
			},
		}
	};
};

export default getState;
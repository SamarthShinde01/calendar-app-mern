import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";
import axios from "axios";

function App() {
	const responseGoogle = (response) => {
		console.log("Google OAuth Response:", response);
		const { credential } = response;

		axios
			.post(`/api/create-tokens`, {
				credential,
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.error(err));
	};

	const responseError = (error) => {
		console.error("Error during Google login:", error);
		alert("Login failed. Please try again.");
	};

	return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<>
				<h1>Google Calendar API</h1>
				<div>
					<GoogleLogin
						onSuccess={responseGoogle}
						onError={responseError}
						scope="openid email profile https://www.googleapis.com/auth/calendar"
					/>
				</div>
			</>
		</GoogleOAuthProvider>
	);
}

export default App;

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
	const responseGoogle = (response) => {
		console.log("Google OAuth Response:", response);
		if (response.credential) {
			const token = response.credential;
			console.log("Access Token:", token);
		}
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
						cookiePolicy={"single_host_origin"}
						//this is important
						responseType="code"
						accessType="offline"
						scope="openid email profile https://www.googleapis.com/auth/calendar"
					/>
				</div>
			</>
		</GoogleOAuthProvider>
	);
}

export default App;

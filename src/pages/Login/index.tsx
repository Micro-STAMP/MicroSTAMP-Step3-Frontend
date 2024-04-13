import LoginForm from "@components/LoginForm";

function Login() {
	return (
		<>
			<h1 style={{ color: "var(--color-yellow)", textShadow: "var(--shadow25)" }}>
				Welcome to MicroSTAMP
			</h1>
			<LoginForm />
		</>
	);
}

export default Login;

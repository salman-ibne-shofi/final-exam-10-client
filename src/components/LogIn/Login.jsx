import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);
	};

	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
							/>
							<div className="flex gap-2 items-center">
								<span>New Here Please</span>
								<Link
									to="/register"
									className="text-orange-600 link link-hover font-medium"
								>
									Register
								</Link>
							</div>
						</div>
						<div className="form-control mt-6">
							<input
								value="login"
								type="submit"
								className="btn btn-primary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

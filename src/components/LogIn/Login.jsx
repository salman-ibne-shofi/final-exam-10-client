import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
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
								required
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
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

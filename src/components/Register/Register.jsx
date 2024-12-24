import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;
		console.log(name, email, photo, password);

		// create user
		createUser(email, password)
			.then((result) => {
				const user = result.user;

				// Show success alert
				Swal.fire({
					title: "Registration Successful!",
					text: `Welcome, ${name}!`,
					icon: "success",
					confirmButtonText: "Thank You",
				});

				// Optionally reset the form
				e.target.reset();
			})
			.catch((error) => {
				console.error(error);

				// sweet alert
				Swal.fire({
					title: "Error!",
					text: "You already registered",
					icon: "error",
					confirmButtonText: "Fix It",
				});
			});
	};
	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								name="name"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
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
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="photo url"
								name="photo"
								placeholder="photo url"
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
								<span>Already registered please</span>
								<Link
									to="/login"
									className="text-blue-600 link link-hover font-medium"
								>
									Login
								</Link>
							</div>
						</div>
						<div className="form-control mt-6">
							<input
								value="Register"
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

export default Register;

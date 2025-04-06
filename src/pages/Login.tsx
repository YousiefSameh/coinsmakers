import { useForm, SubmitHandler } from "react-hook-form";
import SpecialHeading from "@components/shared/SpecialHeading";
import { FaUserCircle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@validations/LoginSchema";
import { useEffect, useState } from "react";
import {
	loginFailure,
	loginRequest,
	loginSuccess,
} from "@store/auth/AuthSlice";
import { useAppDispatch } from "@store/hooks";
import { Link, useNavigate } from "react-router-dom";

type TLoginForm = z.infer<typeof loginSchema>;

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TLoginForm>({
		mode: "onBlur",
		resolver: zodResolver(loginSchema),
	});

	const [formData, setFormData] = useState<TLoginForm | null>(null);

	useEffect(() => {
		if (formData) {
			dispatch(loginRequest());
			dispatch(
				loginSuccess({
					user: { username: formData.username, email: formData.email },
				})
			);
			navigate("/dashboard/earn", { replace: true });
			return () => {
				dispatch(loginFailure("Failed to register user"));
			};
		}
	}, [dispatch, formData, navigate]);

	const submitForm: SubmitHandler<TLoginForm> = (data) => {
		console.log(data);
		setFormData(data);
	};
	return (
		<section className="flex flex-col p-6 w-[90%] md:w-full mx-auto my-6 md:my-0 bg-[#272B3A]">
			<SpecialHeading title="Welcome Back" icon={<FaUserCircle />} />
			<form action="" onSubmit={handleSubmit(submitForm)} className="content">
				<div className="flex flex-col gap-4 mt-5 w-full">
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Username</legend>
						<input
							type="text"
							className={`input border-secondary-color text-white w-full ${
								errors.username?.message
									? "input-error border-red-400 outline-red-400"
									: ""
							}`}
							placeholder="Write here ..."
							{...register("username")}
						/>
						<p className="fieldset-label text-red-400">
							{errors.username?.message}
						</p>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Email Address</legend>
						<input
							type="text"
							className={`input border-secondary-color text-white w-full ${
								errors.email?.message
									? "input-error border-red-400 outline-red-400"
									: ""
							}`}
							placeholder="Write here ..."
							{...register("email")}
						/>
						<p className="fieldset-label text-red-400">
							{errors.email?.message}
						</p>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Password</legend>
						<input
							type="text"
							className={`input border-secondary-color text-white w-full ${
								errors.password?.message
									? "input-error border-red-400 outline-red-400"
									: ""
							}`}
							placeholder="Write here ..."
							{...register("password")}
						/>
						<p className="fieldset-label text-red-400">
							{errors.password?.message}
						</p>
					</fieldset>
				</div>
				<button type="submit" className="btn btn-lg bg-secondary-color mt-4">
					Submit
				</button>
				<p className="mt-4 text-gray-400">
					Do not have an account?{" "}
					<Link to="/dashboard/register" className="text-secondary-color">
						Register
					</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;

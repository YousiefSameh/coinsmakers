import { useForm, SubmitHandler } from "react-hook-form";
import SpecialHeading from "@components/shared/SpecialHeading";
import { FaUserCircle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@validations/RegisterSchema";
import { useEffect, useState } from "react";
import { loginRequest, loginSuccess } from "@store/auth/AuthSlice";
import { useAppDispatch } from "@store/hooks";
import { Link, useNavigate } from "react-router-dom";

type TRegisterForm = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const [formData, setFormData] = useState<TRegisterForm | null>(null);

  useEffect(() => {
    if (formData) {
      // When Backend Is Ready Make This =>
      // dispatch(actRegister(formData));
      dispatch(loginRequest());
      dispatch(
        loginSuccess({
          user: { username: formData.username, email: formData.email },
        })
      );
      navigate("/", { replace: true });
    }
  }, [dispatch, formData, navigate]);

  const submitForm: SubmitHandler<TRegisterForm> = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <section className="flex flex-col w-[90%] md:w-full mx-auto p-6 my-6 md:my-0 dark:bg-[#272B3A]">
      <SpecialHeading title="Create a Account" icon={<FaUserCircle />} />
      <form onSubmit={handleSubmit(submitForm)} className="content">
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
            <legend className="fieldset-legend">Email</legend>
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
              type="password"
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
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Confirm Password</legend>
            <input
              type="password"
              className={`input border-secondary-color text-white w-full ${
                errors.confirmPassword?.message
                  ? "input-error border-red-400 outline-red-400"
                  : ""
              }`}
              placeholder="Write here ..."
              {...register("confirmPassword")}
            />
            <p className="fieldset-label text-red-400">
              {errors.confirmPassword?.message}
            </p>
          </fieldset>
        </div>
        <button type="submit" className="btn btn-lg bg-secondary-color mt-4">
          Submit
        </button>
        <p className="mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary-color">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;

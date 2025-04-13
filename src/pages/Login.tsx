import { useForm, SubmitHandler } from "react-hook-form";
import SpecialHeading from "@components/shared/SpecialHeading";
import { FaUserCircle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@validations/LoginSchema";
import { useEffect, useState } from "react";
import { loginRequest, loginSuccess } from "@store/auth/AuthSlice";
import { useAppDispatch } from "@store/hooks";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      // When Backend Is Ready Make This =>
      // dispatch(actLogin(formData));
      dispatch(loginRequest());
      dispatch(
        loginSuccess({
          user: { identifer: formData.identifier },
        })
      );
      toast.success("Login successful");
      navigate("/dashboard/earn", { replace: true });
    }
  }, [dispatch, formData, navigate]);

  const submitForm: SubmitHandler<TLoginForm> = (data) => {
    console.log(data);
    setFormData(data);
  };
  return (
    <section className="flex flex-col p-6 w-[90%] md:w-full mx-auto my-6 md:my-0 dark:bg-[#272B3A]">
      <SpecialHeading title="Welcome Back" icon={<FaUserCircle />} />
      <form action="" onSubmit={handleSubmit(submitForm)} className="content">
        <div className="flex flex-col gap-4 mt-5 w-full">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Username Or Email Address
            </legend>
            <input
              type="text"
              className={`input border-secondary-color text-white w-full ${
                errors.identifier?.message
                  ? "input-error border-red-400 outline-red-400"
                  : ""
              }`}
              placeholder="Write here ..."
              {...register("identifier")}
            />
            <p className="fieldset-label text-red-400">
              {errors.identifier?.message}
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

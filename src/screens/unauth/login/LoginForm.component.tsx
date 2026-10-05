import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginValues } from "./login.schema"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
    mode: "onTouched",
  })

  const onSubmit = (values: LoginValues) => console.log(values)

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form" noValidate>
        <div className="form-group">
          <label>pseudo:</label>
          <input type="email" {...register("username")} />
          {errors.username && (
            <p className="error-text" text-red-950>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Password : </label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm

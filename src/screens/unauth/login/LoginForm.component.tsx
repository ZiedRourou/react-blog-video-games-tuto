import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import TextField from "@/components/inputs/TextField.component"
import { loginSchema, type LoginValues } from "./login.schema"
import { getMe, login } from "@/api/auth.api"
import { getErrorMessage } from "@/utils/error.utils"

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

  const onSubmit = async (values: LoginValues) => {
    try {
      console.log("login →", await login(values))
      console.log("getMe →", await getMe())
    } catch (error) {
      console.log("erreur →", getErrorMessage(error))
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <TextField
        id="username"
        label="Nom d'utilisateur"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
      />
      <TextField
        id="password"
        type="password"
        label="Mot de passe"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <Button type="submit" className="w-full">
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm

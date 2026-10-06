import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import TextField from "@/components/inputs/TextField.component"
import { getMe, login } from "@/store/session/session.service"
import { getErrorMessage } from "@/utils/error.utils"
import {
  signupSchema,
  type SignupValues,
} from "@/screens/unauth/signup/signup.schema.ts"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { username: "", password: "" },
    mode: "onTouched",
  })

  const onSubmit = async (values: SignupValues) => {
    try {
      console.log("register →", await login(values))
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
        id="email"
        label="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <TextField
        id="password"
        type="password"
        label="Mot de passe"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <TextField
        id="password-confirm"
        type="password-confirm"
        label="Confirmer"
        autoComplete="password-confirm"
        error={errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />
      <Button type="submit" className="w-full">
        S'inscrire
      </Button>
    </form>
  )
}

export default LoginForm

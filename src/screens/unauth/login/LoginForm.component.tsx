import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import TextField from "@/components/inputs/TextField.component"
import { login } from "@/store/session/session.service"
import { sessionQuery } from "@/store/session/session.query"
import { getErrorMessage } from "@/utils/error.utils"
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

  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (user) => queryClient.setQueryData(sessionQuery.queryKey, user),
  })

  const onSubmit = (values: LoginValues) => loginMutation.mutate(values)

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
      {loginMutation.isError && (
        <p role="alert" className="text-sm text-destructive">
          {getErrorMessage(loginMutation.error)}
        </p>
      )}
      <Button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full"
      >
        {loginMutation.isPending ? "Connexion…" : "Se connecter"}
      </Button>
    </form>
  )
}

export default LoginForm

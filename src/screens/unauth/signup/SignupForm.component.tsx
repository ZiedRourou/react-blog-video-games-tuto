import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import TextField from "@/components/inputs/TextField.component"
import { sessionStore, signup } from "@/store/session"
import { getErrorMessage } from "@/utils/error.utils"
import { signupSchema, type SignupValues } from "./signup.schema"
import { toast } from "sonner"

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onTouched",
  })

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(`Compte ${user.username} créé`, {
        description: "Bienvenue",
        duration: 6000,
      })
      sessionStore.setUser(user)
    },
  })

  const onSubmit = (values: SignupValues) => signupMutation.mutate(values)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <TextField
        id="username"
        label="pseudo"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
      />
      <TextField
        id="email"
        type="email"
        label="Email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <TextField
        id="firstname"
        label="prenom d'utilisateur"
        autoComplete="given-name"
        error={errors.firstName?.message}
        {...register("firstName")}
      />
      <TextField
        id="lastname"
        label="nom d'utilisateur"
        autoComplete="family-name"
        error={errors.lastName?.message}
        {...register("lastName")}
      />
      <TextField
        id="password"
        type="password"
        label="Mot de passe"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <TextField
        id="passwordConfirm"
        type="password"
        label="Confirmer le mot de passe"
        autoComplete="new-password"
        error={errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />
      {signupMutation.isError && (
        <p role="alert" className="text-sm text-destructive">
          {getErrorMessage(signupMutation.error)}
        </p>
      )}
      <Button
        type="submit"
        disabled={signupMutation.isPending}
        className="w-full"
      >
        {signupMutation.isPending ? "Inscription…" : "S'inscrire"}
      </Button>
    </form>
  )
}

export default SignupForm

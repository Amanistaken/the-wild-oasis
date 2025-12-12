import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from teh user's email address."
      );
    },
  });
  return { isPending, signup };
}

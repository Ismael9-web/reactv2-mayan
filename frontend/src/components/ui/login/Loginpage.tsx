


import budget from "../../../assets/budget.jpeg";
import LoginForm from "@/components/ui/login/login-form"

// Accept onLoginSuccess prop to notify parent of successful login
export default function LoginPage({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <img src={budget} alt="Logo" className="mb-6 w-24 h-24 rounded-full shadow-md" />
        </a>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  )
}

import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex justify-center w-screen mt-24">
      <div>
        <h1 className="font-bold text-2xl">Login</h1>
        <LoginForm />
        <div className="mt-4">
          <Link
            className="font-bold text-blue-500 hover:text-blue-700"
            href="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <main className="flex justify-center w-screen mt-24">
      <div>
        <h1 className="font-bold text-2xl">Register</h1>
        <RegisterForm />
      </div>
    </main>
  );
}

export default RegisterPage;

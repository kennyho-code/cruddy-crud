import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "./actions";

async function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" required />
      </div>

      <div>
        <Label htmlFor="password">Password:</Label>
        <Input type="password" name="password" required />
      </div>

      <Button formAction={login}>Login</Button>
    </form>
  );
}

export default LoginForm;

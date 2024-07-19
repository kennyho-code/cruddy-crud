import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "./actions";

async function RegisterForm() {
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

      <Button formAction={signup}>Register</Button>
    </form>
  );
}

export default RegisterForm;

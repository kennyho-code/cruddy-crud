import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function getUserId() {
  const supabase = createClient();
  const data = (await supabase.auth.getUser()).data;
  return data.user?.id;
}

async function Profile() {
  const userId = await getUserId();
  return userId ? (
    <>
      <Popover>
        <PopoverTrigger>👤</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  ) : (
    <Link href="/login">Login</Link>
  );
}

export default Profile;

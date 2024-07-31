import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

async function Profile() {
  return (
    <>
      <Popover>
        <PopoverTrigger>👤</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  );
}

export default Profile;

"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  return (
    <header className="bg-red-100 flex justify-between p-4">
      <div>Logo</div>
      <Profile />
    </header>
  );
}

function Profile() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}

export default Header;

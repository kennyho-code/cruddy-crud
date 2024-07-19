import Link from "next/link";
import Profile from "./Profile";

function Header() {
  return (
    <header className="bg-red-100 flex justify-between p-4">
      <div>
        <Link href="/">🍩 The Donut Company</Link>
      </div>
      <Profile />
    </header>
  );
}

export default Header;

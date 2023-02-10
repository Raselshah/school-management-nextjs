import Link from "next/link";

function Navbar() {
  return (
    <div className="sticky top-0">
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link href="/" className="cursor-pointer">Rasel School</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="/" className="hover:bg-red-300
        ">
        <p>Home</p>
        </Link>
        <Link href="/about" className="hover:bg-red-300
        ">
        <p>About</p>
        </Link>
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default Navbar;

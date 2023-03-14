import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>The List</h1>
      </div>
      <Link className="a" href="/">Home</Link>
      <Link className="a" href="/about">ABout</Link>
      <Link className="a" href="/another">Listing</Link>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooopssss.......!!!!</h1>
      <p>That page cannot be found</p>
      <p>
        Go Back To{" "}
        <Link href="/" className="a1">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

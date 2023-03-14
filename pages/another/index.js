import styles from "@/styles/List.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lists: data },
  };
};

const List = ({ lists }) => {
  return (
    <div>
      <h1>All the list</h1>
      {lists.map((list) => (
        <Link
          href={"/another/" + list.id}
          key={list.id}
          className={styles.single}
        >
          <h3>{list.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default List;

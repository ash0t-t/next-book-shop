import Image from "next/image";
import { getAllBooks } from "../lib/actions";
import { Book } from "./book";

export default async function Page() {
  const books = await getAllBooks();
  return (
    <>
      <div className="list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

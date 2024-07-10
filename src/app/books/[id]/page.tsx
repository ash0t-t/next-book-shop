import { getBookById } from "@/app/lib/actions";
import { IBook } from "@/app/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Book } from "../book";

interface IProps {
  params: { id: number };
}

export default async function Page(props: IProps) {
  const book: IBook = await getBookById(props.params.id);
  if (!book) {
    notFound();
  }

  return (
    <>
      <p className="is-size-2">Hello! Book No. {props.params.id}</p>
      {
        <Book key={book.id} book={book}/>
      }
    </>
  );
}

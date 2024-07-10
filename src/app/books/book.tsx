"use client";
import Image from "next/image";
import { IBook } from "../lib/types";
import Link from "next/link";

interface Props {
  book: IBook;
}

export const Book = ({ book }: Props) => {
  return (
    <>
      <Link href={`/books/${book.id}`}>
        <div key={book.id}>
          <Image
            loader={() => book.photo}
            src={book.photo}
            alt="photo"
            width={100}
            height={100}
          />
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.price} AMD</p>
        </div>
      </Link>
      <br></br>
    </>
  );
};

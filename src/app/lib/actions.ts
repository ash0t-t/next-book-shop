import { IBook } from "./types";
import { readFile } from "fs/promises";

export const getAllBooks = async (): Promise<IBook[]> => {
  const books = await readFile("books.json", "utf-8");
  if (books) {
    return JSON.parse(books);
  }
  return [];
};

export const getBookById = async (id: number): Promise<IBook | null> => {
  const books = JSON.parse(await readFile("books.json", "utf-8"));
  return books.find((book: IBook) => book.id == id);
};

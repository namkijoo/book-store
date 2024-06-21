// import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { httpClient, requestHandler } from "./https";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}
export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<AddBookReviewResponse>(
    "post",
    `/reviews/${bookId}`
  );
};

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>("get", "/reviews");
};

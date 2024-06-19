// import { useEffect, useState } from "react";
// import {
//   BookDetail,
//   BookReviewItem,
//   BookReviewItemWrite,
// } from "../models/book.model";
// import { fetchBook, likeBook } from "../api/books.api";
// import { useAuthStore } from "../store/authStore";
// import { useAlert } from "./useAlert";
// import { addCart } from "../api/carts.api";
// import { addBookReview, fetchBookReview } from "@/api/review.api";

// export const useBook = (bookId: string | undefined) => {
//   const [book, setBook] = useState<BookDetail | null>(null);
//   const { isloggedIn } = useAuthStore();
//   const [cartAdded, setCartAdded] = useState(false);
//   const [reviews, setReviews] = useState<BookReviewItem[]>([]);

//   const { showAlert } = useAlert();
//   const likeToggle = () => {
//     if (!isloggedIn) {
//       showAlert("로그인이 필요합니다.");
//       return;
//     }

//     if (!book) return;

//     if (book.liked) {
//     } else {
//       likeBook(book.id).then(() => {
//         setBook({
//           ...book,
//           liked: true,
//           likes: book.likes + 1,
//         });
//       });
//     }
//   };

//   const AddToCart = (quantity: number) => {
//     if (!book) return;
//     addCart({
//       book_id: book.id,
//       quantity: quantity,
//     }).then(() => {
//       setCartAdded(true);
//       setTimeout(() => {
//         setCartAdded(false);
//       }, 3000);
//     });
//   };
//   useEffect(() => {
//     if (!bookId) return;
//     fetchBook(bookId).then((book) => {
//       setBook(book);
//     });
//     fetchBookReview(bookId).then((book) => {
//       setReviews(reviews);
//     });
//   }, [bookId]);
//   const addReview = (data: BookReviewItemWrite) => {
//     if (!book) return;

//     addBookReview(book.id.toString(), data).then((res) => {
//       // fetchBookReview(book.id.toString()).then((book) => {
//       //   setReviews(reviews);
//       // });
//       showAlert(res.message);
//     });
//   };

//   return { book, likeToggle, AddToCart, cartAdded, reviews, addReview };
// };

import { useEffect, useState } from "react";
import {
  BookDetail,
  BookReviewItem,
  BookReviewItemWrite,
} from "../models/book.model";
import { fetchBook, likeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReview, fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const { isloggedIn } = useAuthStore();
  const [cartAdded, setCartAdded] = useState(false);
  const [reviews, setReview] = useState<BookReviewItem[]>([]);

  const { showAlert } = useAlert();
  const likeToggle = () => {
    if (!isloggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    if (book.liked) {
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  const AddToCart = (quantity: number) => {
    if (!book) return;
    addCart({
      book_id: book.id,
      quantity: quantity,
    }).then(() => {
      setCartAdded(true);
      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };
  useEffect(() => {
    if (!bookId) return;
    fetchBook(bookId).then((book) => {
      setBook(book);
    });
    fetchBookReview(bookId).then((reviews) => {
      setReview(reviews);
    });
  }, [bookId]);

  const addReview = (data: BookReviewItemWrite) => {
    if (!book) return;

    addBookReview(book.id.toString(), data).then((res) => {
      // fetchBookReview(book.id.toString()).then((reviews) => {
      //   setReview(reviews);
      // });
      showAlert(res?.message);
    });
  };
  return { book, likeToggle, AddToCart, cartAdded, reviews, addReview };
};

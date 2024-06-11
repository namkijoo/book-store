import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/Books/BooksFilter";
import BooksList from "../components/Books/BooksList";
import BooksEmpty from "../components/Books/BooksEmpty";
import Pagination from "../components/Books/Pagination";
import BooksViewSwitcher from "../components/Books/BooksViewSwitcher";
import { useBooks } from "../hooks/useBooks";

function Books() {
  const { books, pagination, isEmpty } = useBooks();
  console.log("books", books);
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BookStyle>
    </>
  );
}

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;

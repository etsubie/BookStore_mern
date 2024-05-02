import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions/books";
import './style.css'

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <>
      {!books.length ? (
        <p className="none">No Books</p>
      ) : (
        <div className="book-container">
          <div className="table-card">
            <a href="#table" className="table-link">Table</a>
            <a href="#card" className="card-link">Card</a>
          </div>
          <div className="list-add">
            <span>Book List</span>
            {/* <Link to="/create" className="create">+</Link> */}
            <table border={1} id="table">
              <thead>
                <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Operations</th>
              </tr>
              </thead>
              <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <ol></ol>
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishYear}</td>
                  <td>edit / delete</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default Books;

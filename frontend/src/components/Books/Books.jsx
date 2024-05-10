import React, { useEffect } from "react";
// import { Link } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletebook, fetchbooks, updatebook } from "../../actions/books";
import "./style.css";
import { DeleteOutlined, EditOutlined, InfoOutlined } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Stack } from "@mui/material";

const Books = () => {
  const books = useSelector((state) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  return (
    <>
      {!books.length ? (
        <p className="none">
          No Books
          <Link to="/create" className="create">
          <AddCircleIcon sx={{ color: '#0d550d', fontSize: 30 }} />
          </Link>
        </p>
      ) : (
        <div className="book-container">
          <div className="table-card">
            <Link to="/" className="table-link">
              Table
            </Link>
            <Link to="#" className="card-link">
              Card
            </Link>
          </div>
          <div className="list-add">
            <span className="list">Books List</span>
            <Link to="/create" >
              <AddCircleIcon sx={{ color: '#0d550d', fontSize: 30 }} />
            </Link>
          </div>

          <table id="table">
            <thead>
              <tr>
                <th className="numbers">No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id}>
                  <td className="numbers">{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishYear}</td>
                  <td>
                     <Stack direction="row" justifyContent="center" gap={2}>
                     <InfoOutlined sx={{fontSize: 20, color: 'GrayText', cursor: 'pointer'}}/>
                      <EditOutlined sx={{fontSize: 20, color: 'orange', cursor: 'pointer'}} onClick={() => handleEdit(book._id)}/>
                      <DeleteOutlined  sx={{fontSize: 20, color: 'orangeRed', cursor: 'pointer'}} onClick={() => dispatch(deletebook(book._id))}/>
                     </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default Books;

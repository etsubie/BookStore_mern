import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletebook, fetchbooks } from "../../actions/books";
import "./style.css";
import { DeleteOutlined, EditOutlined, InfoOutlined } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";

const Books = () => {
  const books = useSelector((state) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteConfirmation(id);
  };

  const handleDelete = () => {
    dispatch(deletebook(deleteConfirmation));
    setDeleteConfirmation(null); 
  };

  const handleClose = () => {
    setDeleteConfirmation(null);
  };

  return (
    <>
      {!books.length ? (
        <p className="none">
          No Books
          <Link to="/create" className="create">
            <AddCircleIcon sx={{ color: "#0d550d", fontSize: 30 }} />
          </Link>
        </p>
      ) : (
        <div className="book-container">
          <div className="table-card">
            <Link to="/" className="table-link">
              Table
            </Link>
            <Link to="/cards" className="card-link">
              Card
            </Link>
          </div>
          <div className="list-add">
            <span className="list">Books List</span>
            <Link to="/create">
              <AddCircleIcon sx={{ color: "#0d550d", fontSize: 30 }} />
            </Link>
          </div>

          {deleteConfirmation && (
            <Dialog
              open={true}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This action cannot be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleDelete} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          )}

          <table>
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
                      <InfoOutlined
                        sx={{ fontSize: 20, color: "GrayText", cursor: "pointer" }}
                        onClick={() => navigate(`details/${book._id}`)}
                      />
                      <EditOutlined
                        sx={{ fontSize: 20, color: "orange", cursor: "pointer" }}
                        onClick={() => handleEdit(book._id)}
                      />
                      <DeleteOutlined
                        sx={{ fontSize: 20, color: "orangeRed", cursor: "pointer" }}
                        onClick={() => handleDeleteConfirmation(book._id)}
                      />
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

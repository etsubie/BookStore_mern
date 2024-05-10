import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createbooks, fetchbook, updatebook } from "../../actions/books";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    if (id) {
      dispatch(fetchbook(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    // Populate form fields with fetched book data
    if (books && id) {
      setFormData(books);
    }
  }, [books, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.author || !formData.title || !formData.publishYear) {
      alert("Please fill in all fields");
      return;
    }
    if (id) {
      dispatch(updatebook(id, formData));
    } else {
      dispatch(createbooks(formData));
    }
    setFormData({
      title: "",
      author: "",
      publishYear: "",
    });
   
    navigate(-1);

  };

  return (
    <div className="create_container">
      <Link onClick={() => navigate(-1)}>
        <button className="back">
          <ArrowBackIcon />
        </button>
      </Link>
      <div className="cret">{id ? "Edit Book" : "Create Book"}</div>
      <div className="create-card">
        <form onSubmit={handleSubmit}>
          <div className="lbl-input">
            <label>Title</label>
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="lbl-input">
            <label>Author</label>
            <input
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="lbl-input">
            <label>Publish Year</label>
            <input
              value={formData.publishYear}
              onChange={(e) =>
                setFormData({ ...formData, publishYear: e.target.value })
              }
              type="text"
            />
          </div>
          <button className="create-btn">{id ? "Edit" : "Create"}</button>
        </form>
      </div>
    </div>
  );
};
export default CreateBook;

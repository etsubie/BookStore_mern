import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createbook, fetchbooks, updatebook } from "../../actions/books";
import "./style.css";
import {  useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton";
import {useSnackbar} from 'notistack'

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const book = useSelector((state) => state.books.find((book) => book._id === id));

  useEffect(() => {
    if (id) {
      dispatch(fetchbooks());
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (book && id) {
      setFormData(book);
    }
  }, [book, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.author || !formData.title || !formData.publishYear) {
      alert("Please fill in all fields");
      return;
    }
    if (id) {
      dispatch(updatebook(id, formData));
    } else {
      dispatch(createbook(formData));
    }
    setFormData({
      title: "",
      author: "",
      publishYear: "",
    });
    navigate(-1);
    if(id){
      enqueueSnackbar('Book Updated successfully')
    }else{
      enqueueSnackbar('Book created successfully')

    }

  };

  return (
    <div className="create_container">
     <BackButton/>
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooks } from "../../actions/books";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.author || !formData.title || !formData.publishYear) {
      alert("Please fill in all fields");
    }
    dispatch(createBooks(formData));
    setFormData({
      title: "",
      author: "",
      publishYear: "",
    });
    console.log("book created successfuly");
  };

  return (
    <div className="creat_container">
      <button className="back">-</button>
      <span>Create Book</span>
      <div className="create-card">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            type="text"
          />
          <label>Author</label>
          <input
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            type="text"
          />
          <label>Publish Year</label>
          <input
            value={formData.publishYear}
            onChange={(e) =>
              setFormData({ ...formData, publishYear: e.target.value })
            }
            type="text"
          />
          <button className="create-btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;

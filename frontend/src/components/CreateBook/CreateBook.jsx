import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooks } from "../../actions/books";
import "./style.css";

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
    <div className="create_container">
      <button className="back">--</button>
      <div className="cret">Create Book</div>
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
          <button className="create-btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;

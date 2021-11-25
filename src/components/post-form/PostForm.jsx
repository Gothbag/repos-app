import { useState } from "react";

import "./PostForm.css";
import { Link } from "react-router-dom";

export default function PostForm({
  isEditMode,
  onSubmit,
  post = {},
  primaryButtonText
}) {
  const [formData, setFormData] = useState({
    title: post.title || "",
    body: post.body || ""
  });

  const onChangeInput = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmitForm = event => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      body: ""
    });
  };

  const isButtonDisabled = formData.body === "" || formData.body === "";

  return (
    <div className="post-form">
      <h6>Author: {post.author || "Admin"}</h6>
      <form>
        <h3>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChangeInput}
            disabled={!isEditMode}
          />
        </h3>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={onChangeInput}
          disabled={!isEditMode}
        />
        {isEditMode && (
          <button disabled={isButtonDisabled} onClick={handleOnSubmitForm}>
            {primaryButtonText}
          </button>
        )}
        <Link to={`/`}>
          <button>{isEditMode ? "Cancel" : "Exit"}</button>
        </Link>
      </form>
    </div>
  );
}

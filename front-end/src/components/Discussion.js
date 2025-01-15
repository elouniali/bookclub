
import React, { useState } from "react";
import "./Discussion.css";


const Discussion = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setCommentsList([...commentsList, { text: comment }]);
      setComment(""); 
    }
  };

  return (
    <div className="discussion">
      <h2 className="section-title">Discussions sur les livres</h2>

      <div className="comment-form">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Partagez vos pensées sur un livre..."
          rows="5"
        />
        <button onClick={handleAddComment} className="btn btn-primary">
          Ajouter un commentaire
        </button>
      </div>

      <div className="comments-list">
        {commentsList.map((comment, index) => (
          <div className="comment" key={index}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;

import React from "react";
import Profile from "./Profile.jpg";
import "./home-card.css";
import { AiFillHeart } from "react-icons/ai";

const HomeCard = (props) => {
  // console.log(props.post)
  return (
    <div className="home-card">
      <div className="posted-by">
        <h2>{props.post.postedBy.name}</h2>
        <p>{props.post.title}</p>
      </div>
      <div className="media">
        <img src={props.post.photo} alt="post" />
      </div>
      <div className="reactions">
        <AiFillHeart
          onClick={
            // !props.post.likes.includes(props.state._id)
            () => props.likePost(props.post._id)
            // : () => { }
          }
        />
        <p>{props.post.likes.length}</p>
      </div>
      <div className="comments">
        <p>{props.post.body}</p>
        {props.post.comments.map((record) => {
          // console.log(record)
          return (
            <div key={record._id}>
              <p>
                <span>{record.postedBy.name}</span> {record.text}
              </p>
            </div>
          );
        })}
        <form
          onSubmit={(e) => {
            // console.log("I was entered")
            e.preventDefault();
            /* console.log(typeof(e.target[0].value))
            console.log(typeof(props.post._id)) */
            props.makeComment(e.target[0].value, props.post._id);
          }}
        >
          <label htmlFor="comment"></label>
          <input type="text" name="" placeholder="Add a comment" id="comment" />
        </form>
      </div>
    </div>
  );
};

export default HomeCard;

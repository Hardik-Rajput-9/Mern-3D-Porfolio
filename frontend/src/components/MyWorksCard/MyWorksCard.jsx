import React from "react";
import "./MyWorksCard.css";
import { Button, Typography } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";

const MyWorksCard = ({
  url = "",
  title = "Title here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };
  return (
    <div className="myWorksCard">
      <a href={url} target="blank">
        <img src={image} alt="video" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default MyWorksCard;

import React, { useEffect, useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../actions/user";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);

  useEffect(() => {
    if (error) {
      toast.error(error, { toastId: "error-toast" });
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      toast.success(alertMessage, { toastId: "success-toast" });
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, alertMessage, dispatch]);
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

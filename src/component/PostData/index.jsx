import {
  Container,
  FormControl,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useStyles from "./PostData.style";

const PostData = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email && !validateEmail.test(String(email))) {
      // toast.error("Your email is invalid");
      setLoading(false);
      return;
    } else if (!title) {
      setLoading(false);
      // toast.error("The Title field is required.");
      return;
    } else if (!authorName) {
      setLoading(false);
      // toast.error("The author name field is required.");
      return;
    } else if (!phone) {
      setLoading(false);
      // toast.error("The phone field is required.");
      return;
    } else if (!email) {
      setLoading(false);
      // toast.error("The email field is required.");
      return;
    } else if (!description) {
      setLoading(false);
      // toast.error("The description field is required.");
      return;
    }

    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Author_Name", authorName);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Description", description);

    const url = `https://care-box-backend.herokuapp.com/api/v1/applicant_test/`;
    axios({
      method: "post",
      url,
      data: formData,
    })
      .then((res) => {
        if (res) {
          console.log(res.data.message);
          // toast.success(res.data.message);
          setLoading(false);
          setTitle("");
          setAuthorName("");
          setPhone("");
          setEmail("");
          setDescription("");
        }
      })
      .catch((error) => {
        const { errors } = error.response.data;
        for (let key in errors) {
          // toast.error(errors[key]);
        }
        setLoading(false);
      });
  };
  return (
    <Container>
      <div>
        <div>
          <Typography variant="h4" >Submit a form </Typography>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className={classes.contactForm}
        >
          <FormControl fullWidth className={classes.fieldWrapper}>
            <label htmlFor="title">
              Title <span>*</span>
            </label>
            <TextField
              id="title"
              InputLabelProps={{ shrink: true }}
              className={classes.inputField}
              placeholder="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth className={classes.fieldWrapper}>
            <label htmlFor="author_name">
              Author Name <span>*</span>
            </label>
            <TextField
              id="authorName"
              InputLabelProps={{ shrink: true }}
              className={classes.inputField}
              placeholder="Author Name"
              variant="outlined"
              fullWidth
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth className={classes.fieldWrapper}>
            <label htmlFor="phone">
              Phone <span>*</span>
            </label>
            <TextField
              id="phone"
              InputLabelProps={{ shrink: true }}
              className={classes.inputField}
              placeholder="Phone"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth className={classes.fieldWrapper}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <TextField
              id="email"
              InputLabelProps={{ shrink: true }}
              className={classes.inputField}
              placeholder="Email"
              variant="outlined"
              fullWidth
              // error={titleError}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth className={classes.fieldWrapper}>
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <TextareaAutosize
              id="description"
              className={classes.formDescription}
              aria-label="minimum height"
              minRows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <div>
              <button
                className={classes.updateBtn}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Posting..." : "Post"}
              </button>
            </div>
          </FormControl>
        </form>
      </div>
    </Container>
  );
};

export default PostData;

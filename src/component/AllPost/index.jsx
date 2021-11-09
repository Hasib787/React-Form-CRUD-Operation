import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import useStyles from "./AllPost.style";

const AllPost = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/`)
      .then(({ data }) => {
        setPostData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [setPostData]);

  const handleEditPost = () => {
    console.log("Clicked");
  };
  return (
    <Container>
      <Typography style={{ margin: "2rem 0 1rem 0" }} variant="h4">
        All Post
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Author Name</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postData.map((post) => (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.Title}
                </TableCell>
                <TableCell align="left">{post.Author_Name}</TableCell>
                <TableCell align="left">{post.Phone}</TableCell>
                <TableCell align="left">{post.Email}</TableCell>
                <TableCell align="left">{post.Description}</TableCell>

                <button className={classes.editIcon} onClick={handleEditPost}>
                  <CreditScoreIcon />
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllPost;

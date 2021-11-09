import React from "react";
import Footer from "../Footer";
import useStyles from "./Home.style";
import PostData from "../PostData";
import AllPost from "../AllPost";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeWrapper}>
      <PostData/>
      <AllPost/>
      <Footer />
     
    </div>
  );
};

export default Home;

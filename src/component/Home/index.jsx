import React from "react";
import Footer from "../Footer";
import UserProfileForm from "../UserProfile";
import useStyles from "./Home.style";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeWrapper}>
      <UserProfileForm />
      <Footer />
    </div>
  );
};

export default Home;

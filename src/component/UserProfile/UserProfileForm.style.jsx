import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    backgroundColor: "#223445",
  },
  supportWrapper: {
    padding: "0rem 30rem",
  },
  supportTitle: {
    color: "black !important",
    fontSize: "2.2rem",
  },
  description: {
    textAlign: "justify",
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
  },
  contactForm: {
    backgroundColor: "White",
    borderRadius: "4px",
    padding: "2.2rem",
    boxShadow: "3px 3px 10px #cacaca8a",
  },
  fieldWrapper: {
    marginBottom: "1.4rem",
    "& label": {
      marginBottom: "0.5rem",
    },
    "& label > span": {
      color: "red",
    },
  },
  inputField: {
    "&:focus": {
      border: "1px solid gray !important",
    },
    "&:after": {
      borderColor: "gray",
    },
    "& p": {
      fontSize: "14px",
    },
  },
  formDescription: {
    fontSize: "1.5rem",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
  updateBtn: {
    padding: "0.5rem 1.5rem",
    borderRadius: "3px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#0088f2",
    color: "white",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
},
}));

export default useStyles;

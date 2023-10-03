import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    // height: "80px",
    paddingTop: 5,
    paddingBottom: 5,
  },
  appbarText: {
    display: "flex",
    color: "#141627",
    letterSpacing: -2.5,
    fontWeight: 700,
  },
  exploreBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
  },
  explore: {
    letterSpacing: -1,
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;

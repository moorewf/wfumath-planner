import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  },
}));
  
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'caption'}>
        Created by {' '}
        <Link component="a" href="https://ankad.io" target="blank">
        Nitin Ankad
        </Link>
        {' '} et al, and adapted for the Wake Forest Mathematics Department by {' '}
        <Link component="a" href="https://sites.google.com/wfu.edu/frank-moore" target="blank">
        Frank Moore
        </Link>
        . View {' '}
        <Link component="a" href="https://github.com/moorewf/wfumath-planner" target="blank">
	this project
	</Link>
        {' '} or the {' '}
        <Link component="a" href="https://github.com/nitinankad/utdegree-planner" target="blank">
        original project
        </Link>
        {' '} on Github.
      </Typography>
    </div>
  );
};

export default Footer;

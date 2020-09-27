import React, { useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Collapse, makeStyles } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import { connect } from 'react-redux';
import { setBoard } from "../actions/boardActions";
import { addPDFCourses } from "../actions/boardActions";
import Button from '@material-ui/core/Button';
import degreeData from "../constants/degreePlans";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loadJsonCourses, exportCourses } from "../actions/courseActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingLeft: theme.spacing(4)
  },
  listItemText: {
    fontSize: 14,
  },
  subheaderListItem: {
    backgroundColor: "#FFF",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
}));

const LoadCourses = (props) => {
  const { dispatch } = props;
  const classes = useStyles();
  let history = useHistory();

  function redirectGraph() {
    // history.push("/" + yearIndex + "/" + semesterIndex)
    history.push("/graph");
  }

  const [state, setState] = useState({
    openMenu: false,
    needUpdate: false
  });
  const [open, setOpen] = useState({
    text: '',
    isOpen: false
  });

  const handleClickOpen = () => {
    setOpen({
      ...open,
      isOpen: !open.isOpen
    });
  };

  const handleTextChange = (e) => {
    setOpen({
      ...open,
      text: e.target.value
    });
  };

  const handleClose = () => {
    setOpen({
      ...open,
      isOpen: !open.isOpen
    });

  };

  const handleExport = () => {
    // exports the board as a JSON object for importing later on
    // currently sends out an alert from the dispatched function
    dispatch(exportCourses());
  }

  const handleSend = () => {
    handleClose();
    dispatch(loadJsonCourses(open.text));
  }

  const handleClick = () => {
    setState({
      ...state,
      openMenu: !state.openMenu
    });
  };

  const handleLoadDegreePlan = (e, schoolIndex) => {
    const selectedDegreeName = e.target.textContent;
    dispatch(setBoard(degreeData[schoolIndex].degreePlans[selectedDegreeName]));
  };

  const handleFileUpload = (e) => {
    // fetch transcript parsing Python API, dispatch to backend
    // when API call returns to update board, update state to 
    // refresh frontend
    console.log('file uploaded!');
    var data = new FormData()
    data.append('file', e.target.files[0])
    fetch('https://salty-cove-22105.herokuapp.com/api/pdfParse', {
      method: 'POST',
      body: data
    }).then(response => response.json()).then(data => {
      dispatch(addPDFCourses(data));
      setState({
        ...state,
        needUpdate: !state.needUpdate,
      });
    })
  }

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <GetAppIcon />
        </ListItemIcon>
        <ListItemText primary={`Load courses`} />
        {state.openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={state.openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {degreeData.map((school, schoolIndex) => (
            <div key={school.schoolName}>
              <ListItem button className={classes.subheaderListItem}>
                <ListItemText primary={school.schoolName} classes={{ primary: classes.listItemText }} />
              </ListItem>
              {Object.keys(school.degreePlans).map((degree, degreeIndex) => (
                <div key={degree}>
                  <ListItem button className={classes.listItem} onClick={e => handleLoadDegreePlan(e, schoolIndex)}>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary={degree} classes={{ primary: classes.listItemText }} />
                  </ListItem>
                </div>
              ))}
            </div>
          ))}
        </List>
      </Collapse>
      <ListItem>
        <Button variant="contained" onClick={handleClickOpen}>Import</Button>
        <Dialog open={open.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Import</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Paste in your course JSON here (must be exported using the Export button above!)
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="JSON"
              type="text"
              value={open.text}
              onChange={handleTextChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={handleSend} color="primary">
              Import
          </Button>
          </DialogActions>
        </Dialog>
      </ListItem>
      <ListItem>
        <Button variant="contained" onClick={handleExport}>Export</Button>
      </ListItem>
      <ListItem>
        <input
          accept="application/pdf"
          className={classes.input}
          style={{ display: 'none' }}
          id="file"
          type="file"
          onChange={e => handleFileUpload(e)}
        />
        <label htmlFor="file">
          <Button variant="outlined" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </ListItem>
      <ListItem>
        <Button variant="contained" color="primary" onClick={redirectGraph}>Show Graph</Button>
      </ListItem>
    </List >
  );
};

export default connect()(LoadCourses);
import React, { FC, useState } from "react";
import { saveAs } from 'file-saver';
import { Button, ButtonGroup, Paper, TextField, Typography } from "@material-ui/core";
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { FileSnackbar } from ".";

type DisplayOutputProps = {
  entries: string[],
  strings: {
    header: string,
  },
  clearList: () => void,
};


export const DisplayOutput: FC<DisplayOutputProps> = (props) => {
  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ showFailure, setShowFailure ] = useState(false);

  const saveResultWithSeparator = (sep: "\n" | ",") => {
    new Promise((resolve, reject) => {
      const output = props.entries.join(sep);
      const outputFile = `shuffled_result${(sep === "," ? ".csv" : ".txt")}`;

      if (output) {
        saveAs( new Blob([output], {type: "text/plain;charset=utf-8"}), outputFile );
        resolve();
      } else {
        reject();
      }
    })
    .then(() => setShowSuccess(true))
    .catch(() => setShowFailure(true));
  };

  const handleClose = () => {
    setShowSuccess(false);
    setShowFailure(false);
  };

  return (
    <>
      <FileSnackbar message="Download Successful" open={showSuccess} handleClose={handleClose} />
      <FileSnackbar message="No Result to Download" open={showFailure} severity="warning" handleClose={handleClose} />
      <Typography gutterBottom variant="h4" >
        {props.strings.header}
      </Typography>
      <Paper style={{minHeight: "102px"}}>

        {/* Managing the output */}
        <ButtonGroup color="primary" fullWidth style={{marginBottom: "10px"}} variant="outlined">
          <Button onClick={() => {saveResultWithSeparator(",")}} startIcon={ <GetAppRoundedIcon /> }>CSV</Button>
          <Button onClick={() => {saveResultWithSeparator("\n")}} startIcon={ <GetAppRoundedIcon /> }>Rows</Button>
          <Button onClick={props.clearList} startIcon={ <ClearAllRoundedIcon /> }>Clear List</Button>
        </ButtonGroup>

        {/* Displaying the output */}
        <TextField
          color="primary"
          disabled
          multiline
          style={{width: "100%"}}
          value={props.entries.join("\n")}
          variant="outlined"
        />
      </Paper>
    </>
  );
};
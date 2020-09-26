import React, { ChangeEvent, FC, useState } from "react";
import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import { emptyStringArr } from "../Constants";
import { FileSnackbar } from ".";

type DisplayInputProps = {
  entries: string[],
  strings: { header: string },
  handleShuffle: () => void,
  setInput: ( entries: string[] ) => void,
};

export const DisplayInput: FC<DisplayInputProps> = (props) => {
  const [ inputRef, setInputRef ] = useState<HTMLInputElement>();
  const [ open, setOpen ] = useState(false);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          props.setInput(event.target?.result?.toString().split(/[\n,]/) || emptyStringArr);
          resolve();
        }
        reader.readAsText(files[0]);
      }).then(() => setOpen(true));
    }

    // reset value in case they select same file to upload again
    event.target.value = "";
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    props.setInput(emptyStringArr)
  };

  return (
    <>
      <Typography gutterBottom variant="h4" >
        {props.strings.header}
      </Typography>
      <FileSnackbar message="Upload Successful" open={open} handleClose={handleClose}/>
      <div>

        {/* Managing the input */}
        <input
          onChange={handleUpload}
          ref={ (ref) => setInputRef(ref || undefined) }
          style={{ display: 'none' }}
          type="file"
        />
        <ButtonGroup color="primary" fullWidth style={{marginBottom: "10px"}} variant="outlined">
          <Button onClick={() => inputRef!.click()} startIcon={ <PublishRoundedIcon/> } >Upload</Button>
          <Button onClick={props.handleShuffle} startIcon={ <ShuffleRoundedIcon/> } >Shuffle</Button>
          <Button onClick={handleClear} startIcon={ <CloseRoundedIcon /> } >Clear</Button>
        </ButtonGroup>

        {/* Actual Input */}
        <TextField
          color="primary"
          multiline
          onChange={ (e) => {props.setInput(e.target.value.split(/[\n,]/))} }
          style={{width: "100%"}}
          value={props.entries.join("\n")}
          variant="outlined"
        />
      </div>
    </>
  );
}
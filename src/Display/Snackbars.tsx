import React, { FC } from "react";
import { Snackbar, useTheme } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

type ShuffleSnackbarProps = {
  message: string,
  open: boolean,
  severity?: "success" | "info" | "warning" | "error",
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void,
}

export const ShuffleSnackbar: FC<ShuffleSnackbarProps> = (props) => {
  const theme = useTheme();

  return (
    <Snackbar
      autoHideDuration={3000}
      onClose={props.handleClose}
      open={props.open}
      style={{marginBottom: "35px"}}>
      <Alert
        elevation={4}
        onClose={props.handleClose}
        severity={props.severity}
        style={{backgroundColor: theme.palette.primary.contrastText}}
        variant="outlined"
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
};

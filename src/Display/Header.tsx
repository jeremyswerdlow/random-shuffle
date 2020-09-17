import React, { FC } from "react";
import { Typography } from "@material-ui/core";

type HeaderProps = {
  strings: {
    title: string,
    summary: string,
  },
};

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <Typography variant="h1">
        {props.strings.title}
      </Typography>
      <Typography variant="body2" color="primary">
        {props.strings.summary}
      </Typography>
    </>
  );
};
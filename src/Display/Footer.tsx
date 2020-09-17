import React, { FC } from "react";
import { Link, Paper, Typography, useTheme } from "@material-ui/core";
import styled from "styled-components";

const StyledBottomDiv = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

type FooterProps = {
  strings: {
    siteUrl: string,
    text: string,
  }
};

export const Footer: FC<FooterProps> = (props) => {
  return (
    <StyledBottomDiv>
      <Paper square style={{borderTop: "solid 1px", borderColor: useTheme().palette.primary.dark}}>
        <Typography variant="body2" color="primary" style={{padding: "10px"}}>
          {'Copyright © '}
          <Link color="inherit" href={props.strings.siteUrl}>
            {props.strings.text}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Paper>
    </StyledBottomDiv>
  );
}
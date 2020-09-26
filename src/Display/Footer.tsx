import React, { FC } from "react";
import { Link, Typography, useTheme } from "@material-ui/core";
import styled from "styled-components";

const StyledBottomDiv = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(6, 6, 6, 0.6);
`;

type FooterLinkProps = {
  link: string,
}

const FooterLink: FC<FooterLinkProps> = (props) => {
  return (
    <Link color="inherit" href={props.link} target="_blank">
      {props.children}
    </Link>
  );
}

type FooterProps = {
  strings: {
    codeUrl: string,
    siteUrl: string,
    text: string,
  }
};

export const Footer: FC<FooterProps> = (props) => {
  return (
    <StyledBottomDiv>
      <div style={{borderTop: "solid 1px", borderColor: useTheme().palette.primary.dark}}>
        <Typography variant="body2" color="primary" style={{padding: "10px"}}>
          {'Copyright © '}
          <FooterLink link={props.strings.siteUrl}>{props.strings.text}</FooterLink>
          {' '}{new Date().getFullYear()}{'. See the '}
          <FooterLink link={props.strings.codeUrl}>{"source code here."}</FooterLink>
        </Typography>
      </div>
    </StyledBottomDiv>
  );
}
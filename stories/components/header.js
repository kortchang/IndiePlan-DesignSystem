import React from "react";
import styled, { css } from "styled-components";
import { UIColor, TextColor } from "../color";

const HeaderDiv = styled.div`
  width: 100%;
  background-color: ${UIColor.primary};
  padding-left: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  color: white;
`;

const SubHeaderDiv = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const SubHeaderTitle = styled.h1`
  font-size: 30px;
  color: ${TextColor.primary};
`;

export const Header = props => (
  <HeaderDiv>
    <HeaderTitle>{props.children}</HeaderTitle>
  </HeaderDiv>
);

export const SubHeader = props => (
  <SubHeaderDiv>
    <SubHeaderTitle>{props.children}</SubHeaderTitle>
  </SubHeaderDiv>
);

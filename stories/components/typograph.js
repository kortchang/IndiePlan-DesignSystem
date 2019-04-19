import React from "react";
import { Row, Column } from "styled-bootstrap-components";
import styled, { css } from "styled-components";

const SizeText = styled.h1`
  font-family: "NotoSansCJKtc-Medium";
  font-size: 22px;
  text-align: left;
`;

const paddingRow = {
  paddingLeft: "16px",
}

const centerColumn = {
  display: "flex",
  alignItems: "center"
};

export const TypographRow = props => (
  <Row style={paddingRow}>
    <Column sm={1} style={centerColumn}>
      <SizeText>{props.fontsize}</SizeText>
    </Column>
    <Column sm={5} style={centerColumn}>
      {props.children}
    </Column>
  </Row>
);

import React from "react";
import styled, { css } from "styled-components";
import { UIColor, TextColor } from "../color";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
  CardTitle
} from "styled-card-component";
import { Container, Row, Column } from "styled-bootstrap-components";

const CardStyle = {
  width: "180px",
  marginLeft: "32px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 8px 0 rgba(0, 0, 0, 0.1)"
};

const ColorHexStyle = {
  color: "#919191"
};

const ColumnStyle = {
  padding: "16px"
};

export const ColorCard = props => (
  <Column sm={2} md={2} lg={1} style={ColumnStyle}>
    <Card style={CardStyle}>
      <CardHeader
        style={{
          backgroundColor: props.color,
          paddingBottom: "100px",
          border: "0"
        }}
      />
      <CardBody>
        <CardTitle h6>{props.colorName}</CardTitle>
        <CardTitle h6 style={ColorHexStyle}>
          Hex: {props.color}
        </CardTitle>
      </CardBody>
    </Card>
  </Column>
);

import React from "react";

import { storiesOf } from "@storybook/react";

import styled, { css } from "styled-components";
import { Container, Row, Column } from "styled-bootstrap-components";
import { TypographRow } from "./components/typograph";
import { Header, SubHeader } from "./components/header";
import { UIColor, TextColor } from "./color";
import { ColorCard } from "./components/card";

storiesOf("UI", module).add("All", () => (
  <div>
    <Container fluid>
      <Header>UI</Header>
      <SubHeader>Color</SubHeader>
      <Row>
        <ColorCard color={UIColor.primary} colorName="Primary" />
        <ColorCard color={UIColor.primaryVarient} colorName="PrimaryVarient" />
        <ColorCard color={UIColor.secondary} colorName="Secondary" />
        <ColorCard color={UIColor.accent} colorName="Accent" />
        <ColorCard color={UIColor.cardBackground} colorName="CardBackground" />
        <ColorCard color={UIColor.surface} colorName="Surface" />
      </Row>
    </Container>
  </div>
));

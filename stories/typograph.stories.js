import React from "react";

import { storiesOf } from "@storybook/react";

import styled, { css } from "styled-components";
import { Container, Row, Column } from "styled-bootstrap-components";
import { TypographRow } from "./components/typograph";
import { Header, SubHeader } from "./components/header";
import { UIColor, TextColor } from "./color";
import { ColorCard } from "./components/card";

const Heading1 = styled.h1`
  font-family: "NotoSansCJKtc-Medium";
  font-size: 22px;
  text-align: left;
  vertical-align: center;
  color: ${TextColor.primary};
`;

const Heading4 = styled.h4`
  font-family: "NotoSansCJKtc-Medium";
  font-size: 16px;
  text-align: left;
  vertical-align: center;
  color: ${TextColor.primary};
`;

const Heading6 = styled.h6`
  font-family: "NotoSansCJKtc-Medium";
  font-size: 12px;
  text-align: left;
  vertical-align: center;
  color: ${TextColor.primary};
`;

storiesOf("Typograph", module).add("All", () => (
  <div>
    <Container fluid>
      <Header>Typogragh</Header>
      <SubHeader>Heading</SubHeader>
      <TypographRow fontsize="22px">
        <Heading1>Heading1</Heading1>
      </TypographRow>
      <TypographRow fontsize="16px">
        <Heading4>Heading4</Heading4>
      </TypographRow>
      <TypographRow fontsize="12px">
        <Heading6>Heading6</Heading6>
      </TypographRow>
      <SubHeader>TextColor</SubHeader>
      <Row>
        <ColorCard color={TextColor.primary} colorName="Primary" />
        <ColorCard
          color={TextColor.primaryVarient}
          colorName="PrimaryVarient"
        />
        <ColorCard color={TextColor.secondary} colorName="Secondary" />
        <ColorCard color={TextColor.warning} colorName="Warning" />
        <ColorCard color={TextColor.onPrimary} colorName="OnPrimary " />
      </Row>
    </Container>
  </div>
));

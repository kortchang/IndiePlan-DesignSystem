import { configure, addDecorator } from "@storybook/react";
import { IndieTheme } from "../stories/color";
import React from "react";
import { BootstrapBaseCss } from "styled-base-components";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

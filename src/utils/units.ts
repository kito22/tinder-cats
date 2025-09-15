import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// Based on iPhone 11 design guidelines
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Horizontal scaling
export const scaleH = (size: number) =>
  (deviceWidth / guidelineBaseWidth) * size;

// Vertical scaling
export const scaleV = (size: number) =>
  (deviceHeight / guidelineBaseHeight) * size;

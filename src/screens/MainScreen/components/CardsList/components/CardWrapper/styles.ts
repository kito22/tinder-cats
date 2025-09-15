import { StyleSheet } from "react-native";
import { CARD_HEIGHT } from "../Card/components/consts";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardWrapperContainer: {
    position: "absolute",
    width: width * 0.9,
    height: CARD_HEIGHT,
  },
});

export default styles;

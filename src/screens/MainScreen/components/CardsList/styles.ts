import { StyleSheet } from "react-native";
import { CARD_HEIGHT } from "./components/Card/components/consts";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    maxHeight: CARD_HEIGHT,
    position: "relative",
  },
  cardItem: {
    position: "absolute",
    width: width * 0.9,
    height: CARD_HEIGHT,
  },
});

export default styles;

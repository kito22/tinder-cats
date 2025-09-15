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
  nextCard: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },
});

export default styles;

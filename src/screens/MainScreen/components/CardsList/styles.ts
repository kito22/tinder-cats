import { StyleSheet } from "react-native";
import { CARD_HEIGHT } from "./components/Card/components/consts";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  gestureHandlerRootView: {
    maxHeight: CARD_HEIGHT,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { scaleH, scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  viewModeSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleV(16),
    marginBottom: scaleV(32),
    columnGap: scaleH(8),
  },
});

export default styles;

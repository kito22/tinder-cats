import { StyleSheet } from "react-native";
import { colors } from "src/theme/theme";
import { scaleH, scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  viewModeSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleV(16),
    marginBottom: scaleV(32),
    columnGap: scaleH(2),
    backgroundColor: "#E3E3E4",
    padding: scaleH(2),
    borderRadius: scaleH(32),
  },
  selectorButton: {
    height: scaleH(32),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scaleH(32),
    paddingHorizontal: scaleH(12),
  },
  selectedButton: {
    backgroundColor: colors.background,
  },
});

export default styles;

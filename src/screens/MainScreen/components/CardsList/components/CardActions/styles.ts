import { StyleSheet } from "react-native";
import { colors, shadows } from "src/theme/theme";
import { scaleH, scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  cardActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleV(32),
    columnGap: scaleH(48),
  },
  cardActionButton: {
    height: scaleV(54),
    width: scaleV(54),
    borderRadius: scaleV(30),
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.primary,
  },
});

export default styles;

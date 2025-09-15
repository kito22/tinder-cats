import { StyleSheet } from "react-native";
import { colors } from "src/theme/theme";
import { scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textPrimary,
    fontSize: scaleV(72),
  },
});

export default styles;

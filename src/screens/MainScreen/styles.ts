import { StyleSheet } from "react-native";
import { colors } from "src/theme/theme";
import { scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleV(16),
    backgroundColor: colors.background,
    alignItems: "center",
  },
});

export default styles;

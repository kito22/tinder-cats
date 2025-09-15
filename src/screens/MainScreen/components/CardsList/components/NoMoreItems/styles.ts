import { StyleSheet } from "react-native";
import { colors } from "src/theme/theme";
import { scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: scaleV(16),
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: scaleV(16),
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.focusedIcon,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: scaleV(16),
    fontWeight: "600",
  },
});

export default styles;

import { Dimensions, StyleSheet } from "react-native";
import { shadows } from "src/theme/theme";
import { scaleH, scaleV } from "src/utils/units";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BAR_WIDTH = scaleH(156);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: scaleH(156),
    borderRadius: scaleV(30),
    height: scaleV(60),
    bottom: scaleV(4),
    marginLeft: (SCREEN_WIDTH - BAR_WIDTH) / 2,
    borderWidth: 1,
    ...shadows.primary,
  },
});

export default styles;

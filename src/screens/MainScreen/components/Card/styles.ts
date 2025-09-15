import { StyleSheet } from "react-native";
import { colors, shadows } from "src/theme/theme";
import { scaleH, scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    height: scaleV(446),
    width: "100%",
    borderRadius: scaleV(16),
    ...shadows.primary,
  },
  cardImage: {
    height: "100%",
    width: "100%",
    borderRadius: scaleV(16),
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    left: scaleH(20),
    right: scaleH(20),
    paddingHorizontal: scaleV(16),
    paddingVertical: scaleV(8),
    borderTopLeftRadius: scaleV(16),
    borderTopRightRadius: scaleV(16),
    backgroundColor: colors.background,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: scaleV(24),
    fontWeight: "700",
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: scaleV(8),
    fontWeight: "700",
    color: colors.textSecondary,
  },
  cardAttribute: {
    fontSize: scaleV(16),
    fontWeight: "700",
    color: colors.textPrimary,
  },
});

export default styles;

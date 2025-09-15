import { StyleSheet } from "react-native";
import { scaleH, scaleV } from "src/utils/units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleV(16),
    alignItems: "center",
    backgroundColor: "#fff",
  },
  viewModeSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleV(16),
    marginBottom: scaleV(32),
    columnGap: scaleH(8),
  },

  catContainer: {
    height: scaleV(446),
    width: "100%",
    borderRadius: scaleV(16),
    overflow: "hidden",
  },
  catImage: {
    height: "100%",
    width: "100%",
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
    backgroundColor: "#fff",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  catNameText: {
    fontSize: scaleV(24),
    fontWeight: "700",
    color: "#434141",
  },
  originText: {
    fontSize: scaleV(8),
    fontWeight: "700",
    color: "#BFBFC0",
  },
  affectionLevelText: {
    fontSize: scaleV(16),
    fontWeight: "700",
    color: "#434141",
  },
  cardActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleV(58),
    columnGap: scaleH(48),
  },
  cardActionButton: {
    height: scaleV(54),
    width: scaleV(54),
    borderRadius: scaleV(30),
    shadowColor: "#BFBFC04D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;

import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "src/theme/theme";
import styles from "./styles";

interface IOwnProps {
  size?: "small" | "large";
  color?: string;
}

const Loading: React.FC<IOwnProps> = ({
  size = "large",
  color = colors.textPrimary,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

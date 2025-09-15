import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface IOwnProps {
  onRestart?: () => void;
  message?: string;
}

const NoMoreItems: React.FC<IOwnProps> = ({
  onRestart,
  message = "You've reached the end!",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>

      {onRestart && (
        <TouchableOpacity style={styles.button} onPress={onRestart}>
          <Text style={styles.buttonText}>See cats again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NoMoreItems;

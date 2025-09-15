import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface IOwnProps {
  onPress: (direction: "left" | "right") => void;
}

const CardActions: React.FC<IOwnProps> = ({ onPress }) => {
  return (
    <View style={styles.cardActionsContainer}>
      <TouchableOpacity
        style={styles.cardActionButton}
        onPress={() => onPress("left")}
      >
        <Text>Dislike</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardActionButton}
        onPress={() => onPress("right")}
      >
        <Text>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardActions;

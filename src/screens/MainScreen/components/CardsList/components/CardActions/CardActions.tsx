import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { TSwipeDirection } from "../../types";

interface IOwnProps {
  onPress: (direction: TSwipeDirection) => void;
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

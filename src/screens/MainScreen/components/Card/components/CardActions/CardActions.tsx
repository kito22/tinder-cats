import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const CardActions: React.FC = () => {
  return (
    <View style={styles.cardActionsContainer}>
      <TouchableOpacity style={styles.cardActionButton}>
        <Text>Dislike</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardActionButton}>
        <Text>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardActions;

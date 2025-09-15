import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { TSwipeDirection } from "../../types";
import DislikeIcon from "assets/svg/dislike.svg";
import HeartIcon from "assets/svg/heart.svg";

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
        <DislikeIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardActionButton}
        onPress={() => onPress("right")}
      >
        <HeartIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CardActions;

import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import TinderIcon from "assets/svg/tinder.svg";
import StarIcon from "assets/svg/star.svg";

const ViewModeSelector: React.FC = () => {
  return (
    <View style={styles.viewModeSelector}>
      <TouchableOpacity style={[styles.selectorButton, styles.selectedButton]}>
        <TinderIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectorButton}>
        <StarIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ViewModeSelector;

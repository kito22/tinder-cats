import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ViewModeSelector: React.FC = () => {
  return (
    <View style={styles.viewModeSelector}>
      <TouchableOpacity>
        <Text>Cats</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewModeSelector;

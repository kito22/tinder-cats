import { View } from "react-native";
import styles from "./styles";
import ViewModeSelector from "./components/ViewModeSelector/ViewModeSelector";
import Card from "./components/Card/Card";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ViewModeSelector />

      <Card />
    </View>
  );
};

export default MainScreen;

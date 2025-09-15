import { View } from "react-native";
import styles from "./styles";
import ViewModeSelector from "./components/ViewModeSelector/ViewModeSelector";
import CardsList from "./components/CardsList/CardsList";

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ViewModeSelector />

      <CardsList />
    </View>
  );
};

export default MainScreen;

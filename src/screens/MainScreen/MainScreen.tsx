import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewModeSelector}>
        <TouchableOpacity>
          <Text>Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Favorites</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.catContainer}>
        <Image
          style={styles.catImage}
          source={{
            uri: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
          }}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.catNameText}>Miau</Text>
            <Text style={styles.affectionLevelText}>4</Text>
          </View>
          <Text style={styles.originText}>Egypt</Text>
        </View>
      </View>

      <View style={styles.cardActionsContainer}>
        <TouchableOpacity style={styles.cardActionButton}>
          <Text>Dislike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardActionButton}>
          <Text>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

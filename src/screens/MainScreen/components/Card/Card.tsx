import { Image, Text, View } from "react-native";
import styles from "./styles";
import CardActions from "./components/CardActions/CardActions";

const Card: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
          }}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.cardTitle}>Miau</Text>
            <Text style={styles.cardAttribute}>4</Text>
          </View>
          <Text style={styles.cardSubtitle}>Egypt</Text>
        </View>
      </View>

      <CardActions />
    </View>
  );
};

export default Card;

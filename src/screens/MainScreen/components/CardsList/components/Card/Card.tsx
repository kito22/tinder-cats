import { Image, Text, View } from "react-native";
import styles from "./styles";

interface IOwnProps {
  item: {
    id: string;
    name: string;
    origin: string;
    affection_level: number;
  };
}

const Card: React.FC<IOwnProps> = ({ item }) => {
  return (
    <View style={styles.cardContent}>
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardAttribute}>{item.affection_level}</Text>
        </View>
        <Text style={styles.cardSubtitle}>{item.origin}</Text>
      </View>
    </View>
  );
};

export default Card;

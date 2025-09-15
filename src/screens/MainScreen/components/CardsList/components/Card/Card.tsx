import { Image, Text, View } from "react-native";
import styles from "./styles";
import { ICatFull } from "src/types/cat";

interface IOwnProps {
  item: ICatFull;
}

const Card: React.FC<IOwnProps> = ({ item }) => {
  return (
    <View style={styles.cardContent}>
      <Image
        style={styles.cardImage}
        source={{
          uri: item.imageUrl,
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

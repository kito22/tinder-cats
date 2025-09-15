import { View } from "react-native";
import Card from "./components/Card/Card";
import CardActions from "./components/CardActions/CardActions";
import styles from "./styles";
import { useRef, useState } from "react";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { ICardWrapperRef, TSwipeDirection } from "./types";

const MOCK_CARDS = [
  {
    id: "1",
    name: "Whiskers",
    origin: "Egypt",
    affection_level: 5,
  },
  {
    id: "2",
    name: "Mittens",
    origin: "USA",
    affection_level: 4,
  },
  {
    id: "3",
    name: "Shadow",
    origin: "UK",
    affection_level: 3,
  },
];

const CardsList: React.FC = () => {
  const cardRef = useRef<ICardWrapperRef>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardAction = (direction: TSwipeDirection) => {
    cardRef.current?.swipe(direction);
  };

  const handleSwipe = (direction: TSwipeDirection) => {
    if (direction === "right") {
      // TODO: call API
    }

    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {MOCK_CARDS[currentIndex + 1] && (
          <View style={[styles.cardItem, styles.nextCard]}>
            <Card item={MOCK_CARDS[currentIndex + 1]} />
          </View>
        )}

        {MOCK_CARDS[currentIndex] && (
          <CardWrapper ref={cardRef} onSwipe={handleSwipe}>
            <Card item={MOCK_CARDS[currentIndex]} />
          </CardWrapper>
        )}
      </View>
      <CardActions onPress={handleCardAction} />
    </View>
  );
};

export default CardsList;

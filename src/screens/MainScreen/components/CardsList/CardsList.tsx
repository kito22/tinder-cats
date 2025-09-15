import { View } from "react-native";
import Card from "./components/Card/Card";
import CardActions from "./components/CardActions/CardActions";
import styles from "./styles";
import { useRef, useState } from "react";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { ICardWrapperRef, TSwipeDirection } from "./types";
import { useCats } from "./hooks/useCats";
import { useVotes } from "./hooks/useVotes";

const CardsList: React.FC = () => {
  const { cats } = useCats();
  const { vote } = useVotes();

  const cardRef = useRef<ICardWrapperRef>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardAction = (direction: TSwipeDirection) => {
    cardRef.current?.swipe(direction);
  };

  const handleSwipe = (direction: TSwipeDirection) => {
    if (direction === "right") {
      vote({
        image_id: cats[currentIndex].reference_image_id,
        value: 1,
      });
    }

    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {cats[currentIndex] && (
          <CardWrapper
            key={`active-${cats[currentIndex].id}`}
            ref={cardRef}
            onSwipe={handleSwipe}
          >
            <Card item={cats[currentIndex]} />
          </CardWrapper>
        )}
      </View>
      <CardActions onPress={handleCardAction} />
    </View>
  );
};

export default CardsList;

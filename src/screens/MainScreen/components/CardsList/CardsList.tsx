import { Dimensions, View } from "react-native";
import Card from "./components/Card/Card";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import CardActions from "./components/CardActions/CardActions";
import styles from "./styles";
import { useState } from "react";
import { scheduleOnRN } from "react-native-worklets";

const { width } = Dimensions.get("window");

const SWIPE_THRESHOLD = width * 0.35;

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotateZ: `${(translateX.value / width) * 10}deg` },
    ],
  }));

  const handleNextCard = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCardAction = (direction: "left" | "right") => {
    const toValue = direction === "right" ? width : -width;

    translateX.value = withSpring(toValue, {}, () => {
      if (direction === "right") {
        // TODO: call api
      }

      scheduleOnRN(handleNextCard);
      translateX.value = 0;
    });
  };

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        const direction = translateX.value > 0 ? "right" : "left";
        scheduleOnRN(handleCardAction, direction);

        return;
      }

      translateX.value = withSpring(0);
    });

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {MOCK_CARDS[currentIndex + 1] && (
          <View style={[styles.cardItem, styles.nextCard]}>
            <Card item={MOCK_CARDS[currentIndex + 1]} />
          </View>
        )}

        {MOCK_CARDS[currentIndex] && (
          <>
            <GestureHandlerRootView style={[styles.cardItem]}>
              <GestureDetector gesture={panGesture}>
                <Animated.View style={[animatedStyle]}>
                  <Card item={MOCK_CARDS[currentIndex]} />
                </Animated.View>
              </GestureDetector>
            </GestureHandlerRootView>
          </>
        )}
      </View>
      <CardActions onPress={handleCardAction} />
    </View>
  );
};

export default CardsList;

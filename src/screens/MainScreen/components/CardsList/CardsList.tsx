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

const { width } = Dimensions.get("window");

const SWIPE_THRESHOLD = width * 0.35;

const CardsList: React.FC = () => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotateZ: `${(translateX.value / width) * 20}deg` },
    ],
  }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        const direction = translateX.value > 0 ? 1 : -1;

        translateX.value = withSpring(direction * width, {}, () => {
          translateX.value = 0;
        });
        return;
      }

      translateX.value = withSpring(0);
    });

  const handleButtonPress = (direction: "left" | "right") => {
    const toValue = direction === "right" ? width : -width;
    translateX.value = withSpring(toValue, {}, () => {
      translateX.value = 0;
    });
  };

  return (
    <View style={styles.cardContainer}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              {
                width: width * 0.9,
              },
              animatedStyle,
            ]}
          >
            <Card />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
      <CardActions onPress={handleButtonPress} />
    </View>
  );
};

export default CardsList;

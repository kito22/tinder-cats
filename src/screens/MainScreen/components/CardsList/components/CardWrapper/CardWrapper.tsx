import React, { useImperativeHandle, forwardRef } from "react";
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
import { scheduleOnRN } from "react-native-worklets";
import { Dimensions } from "react-native";
import styles from "./styles";
import { ICardWrapperRef, TSwipeDirection } from "../../types";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = width * 0.35;

interface IOwnProps {
  onSwipe: (direction: TSwipeDirection) => void;
  children: React.ReactNode;
}

const CardWrapper = forwardRef<ICardWrapperRef, IOwnProps>(
  ({ onSwipe, children }, ref) => {
    const translateX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: translateX.value },
        { rotateZ: `${(translateX.value / width) * 10}deg` },
      ],
    }));

    const panGesture = Gesture.Pan()
      .onUpdate((event) => {
        translateX.value = event.translationX;
      })
      .onEnd(() => {
        if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
          const direction = translateX.value > 0 ? "right" : "left";
          const toValue = direction === "right" ? width : -width;

          translateX.value = withSpring(toValue, {}, () => {
            scheduleOnRN(onSwipe, direction);
            translateX.value = 0;
          });

          return;
        }

        translateX.value = withSpring(0);
      });

    useImperativeHandle(ref, () => ({
      swipe: (direction: TSwipeDirection) => {
        const toValue = direction === "right" ? width : -width;

        translateX.value = withSpring(toValue, {}, () => {
          scheduleOnRN(onSwipe, direction);
          translateX.value = 0;
        });
      },
    }));

    return (
      <GestureHandlerRootView style={styles.cardWrapperContainer}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[animatedStyle]}>{children}</Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    );
  }
);

export default CardWrapper;

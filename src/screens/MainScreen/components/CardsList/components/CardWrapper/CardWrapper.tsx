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
    const isAnimating = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: translateX.value },
        { rotateZ: `${(translateX.value / width) * 10}deg` },
      ],
    }));

    const animateOut = (direction: TSwipeDirection) => {
      if (isAnimating.value) {
        return;
      }

      isAnimating.value = true;

      const toValue = direction === "right" ? width : -width;

      translateX.value = withSpring(
        toValue * 1.2,
        {
          duration: 150,
        },
        () => {
          scheduleOnRN(onSwipe, direction);
          isAnimating.value = false;
        }
      );
    };

    const panGesture = Gesture.Pan()
      .onUpdate((event) => {
        if (!isAnimating.value) {
          translateX.value = event.translationX;
        }
      })
      .onEnd(() => {
        if (isAnimating.value) {
          return;
        }

        if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
          const direction: TSwipeDirection =
            translateX.value > 0 ? "right" : "left";

          scheduleOnRN(animateOut, direction);
        } else {
          translateX.value = withSpring(0);
        }
      });

    useImperativeHandle(ref, () => ({
      swipe: (direction: TSwipeDirection) => {
        scheduleOnRN(animateOut, direction);
      },
      resetPosition: () => {
        translateX.value = 0;
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

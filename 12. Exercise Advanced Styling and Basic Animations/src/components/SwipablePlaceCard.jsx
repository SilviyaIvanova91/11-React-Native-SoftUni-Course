import { GestureDetector, usePanGesture } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDecay } from 'react-native-reanimated';

import PlaceCard from './PlaceCard';

export default function SwipablePlaceCard(props) {
    const translateX = useSharedValue(0);

    const pan = usePanGesture({
        onBegin(options) {
            console.log('Pan gesture began');
        },
        onUpdate(options) {
            translateX.value = Math.min(options.translationX, 0);
        },
        onFinalize() {
            translateX.value = withSpring(0);
            // translateX.value = withTiming(0, { duration: 500 });
            // translateX.value = withDecay({ velocity: translateX.value });
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <GestureDetector gesture={pan}>
            <PlaceCard {...props} style={animatedStyle} />
        </GestureDetector>
    );
}

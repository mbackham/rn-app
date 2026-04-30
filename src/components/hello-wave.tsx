import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

export function HelloWave() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, { toValue: 1, duration: 150, useNativeDriver: true }),
        Animated.timing(rotation, { toValue: -1, duration: 150, useNativeDriver: true }),
        Animated.timing(rotation, { toValue: 1, duration: 150, useNativeDriver: true }),
        Animated.timing(rotation, { toValue: 0, duration: 150, useNativeDriver: true }),
        Animated.delay(1000),
      ]),
      { iterations: 3 },
    ).start();
  }, []);

  const rotate = rotation.interpolate({ inputRange: [-1, 1], outputRange: ['-25deg', '25deg'] });

  return (
    <Animated.View style={[styles.container, { transform: [{ rotate }] }]}>
      <Text style={styles.wave}>👋</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { transformOrigin: 'bottom right' },
  wave: { fontSize: 28, lineHeight: 32 },
});

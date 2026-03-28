import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SplashStyles as styles } from '../styles/screens/SplashStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Loading from '../components/Loading';

const FLOATING_ICONS = [
  { emoji: '🦴', position: 'iconTopLeft' },
  { emoji: '✨', position: 'iconTopRight' },
  { emoji: '❤️', position: 'iconLeft' },
  { emoji: '🩺', position: 'iconRight' },
  { emoji: '🐕', position: 'iconBottomLeft' },
  { emoji: '🐈', position: 'iconBottomRight' },
];

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => navigation.replace('Main'), 1800);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.6)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 55,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim, scaleAnim, floatAnim, slideAnim]);

  const getFloatTranslate = (index) =>
    floatAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, index % 2 === 0 ? -10 : 10],
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topBackground} />

        {FLOATING_ICONS.map((icon, index) => (
          <Animated.View
            key={icon.position}
            style={[
              styles.floatingIcon,
              styles[icon.position],
              {
                opacity: fadeAnim,
                transform: [{ translateY: getFloatTranslate(index) }],
              },
            ]}
          >
            <Text style={styles.floatingEmoji}>{icon.emoji}</Text>
          </Animated.View>
        ))}

        <Animated.View
          style={[
            styles.centralCircle,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Text style={styles.centralEmoji}><Ionicons name="paw" size={72} color="#FFFFFF" /></Text>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.bottomSection,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.title}>
          ¡Bienvenido a{'\n'}
          <Text style={styles.titleAccent}>PetCare!</Text>
        </Text>
        <Text style={styles.subtitle}>
          Tu gestor de mascotas favorito. Registra, cuida y aprende todo sobre tus compañeros.
        </Text>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStart}
          activeOpacity={0.85}
          disabled={isLoading}
        >
          <Text style={styles.startButtonText}>Comenzar</Text>
        </TouchableOpacity>
      </Animated.View>

      {isLoading && <Loading message="Preparando tu espacio..." />}
    </SafeAreaView>
  );
};

export default SplashScreen;

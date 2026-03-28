import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { CARE_TIPS } from '../../assets/data/tipsData';
import Badge from '../components/Badge';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import { TipsStyles as styles } from '../styles/screens/TipsStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const TOTAL = CARE_TIPS.length;
const AUTO_INTERVAL_MS = 5000;

const TipsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTip = CARE_TIPS[currentIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TOTAL);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TOTAL);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        iconName="bulb-outline"
        title="Consejos de Cuidado"
        subtitle="Aprende a cuidar mejor a tu mascota"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.tipCardPadding}>
          <View style={styles.tipEmojiContainer}>
            <Text style={styles.tipEmoji}>{currentTip.emoji}</Text>
          </View>
          <Badge
            text={currentTip.category}
            backgroundColor={currentTip.categoryColor}
            textColor={currentTip.categoryTextColor}
            style={styles.categoryBadgeMargin}
          />
          <Text style={styles.tipTitle}>{currentTip.title}</Text>
          <Text style={styles.tipText}>{currentTip.tip}</Text>
          <View style={styles.autoIndicator}>
            <View style={styles.autoIndicatorDot} />
            <Text style={styles.autoIndicatorText}>
              Se actualiza automáticamente cada 5 segundos
            </Text>
          </View>
        </Card>

        <PrimaryButton
          label="Siguiente consejo"
          iconName="arrow-forward"
          onPress={handleNext}
          style={styles.nextButton}
        />

        <View style={styles.dotsContainer}>
          {CARE_TIPS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TipsScreen;

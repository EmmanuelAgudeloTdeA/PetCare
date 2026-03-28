import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { INITIAL_PETS } from '../../assets/data/petsData';
import { CARE_TIPS } from '../../assets/data/tipsData';
import Card from '../components/Card';
import { HomeStyles as styles } from '../styles/screens/HomeStyles';
import { COLORS } from '../../assets/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATS = [
  {
    iconName: 'paw',
    value: INITIAL_PETS.length,
    label: 'Mascotas',
    color: COLORS.primary,
  },
  {
    iconName: 'bulb',
    value: CARE_TIPS.length,
    label: 'Consejos',
    color: COLORS.accent,
  },
  {
    iconName: 'medkit',
    value: '24/7',
    label: 'Cuidado',
    color: COLORS.secondary,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.heroBubbleLarge} />
          <View style={styles.heroBubbleMedium} />
          <View style={styles.heroBubbleAccent} />
          <View style={styles.heroBubbleTiny} />

          <View style={styles.heroIconWrapper}>
            <Ionicons name="paw" size={44} color="#FFFFFF" />
          </View>
          <Text style={styles.heroTitle}>PetCare</Text>
          <Text style={styles.heroSubtitle}>
            El gestor de mascotas que tu familia peluda merece
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Resumen</Text>
          <View style={styles.statsRow}>
            {STATS.map(stat => (
              <Card key={stat.label} style={styles.statCard}>
                <Ionicons
                  name={stat.iconName}
                  size={28}
                  color={stat.color}
                  style={styles.statIcon}
                />
                <Text style={[styles.statValue, { color: stat.color }]}>
                  {stat.value}
                </Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

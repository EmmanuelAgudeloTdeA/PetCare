import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Card from '../../components/Card';
import InfoItem from '../../components/InfoItem';
import PrimaryButton from '../../components/PrimaryButton';
import { calculateAge, formatDate } from '../../utils/dateUtils';
import { PetDetailStyles as styles } from '../../styles/screens/PetDetailStyles';

const PetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { pet } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: pet.name });
  }, [pet, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.heroImageContainer}>
              <Ionicons name="paw" size={52} color="rgba(255,255,255,0.8)" />
          </View>
          <Text style={styles.heroName}>{pet.name}</Text>
          <Text style={styles.heroSpecies}>
            {pet.species} · {pet.breed}
          </Text>
        </View>

        <View style={styles.content}>
          <Card title="Información General">
            <View style={styles.infoGrid}>
              <InfoItem
                iconName="pricetag-outline"
                label="Nombre"
                value={pet.name}
              />
              <InfoItem
                iconName="paw-outline"
                label="Especie"
                value={pet.species}
              />
              <InfoItem
                iconName="flask-outline"
                label="Raza"
                value={pet.breed}
              />
              <InfoItem
                iconName="calendar-outline"
                label="Nacimiento"
                value={formatDate(pet.birthDate)}
              />
              <InfoItem
                iconName="hourglass-outline"
                label="Edad"
                value={calculateAge(pet.birthDate)}
              />
              <InfoItem
                iconName="scale-outline"
                label="Peso"
                value={`${pet.weight} kg`}
              />
            </View>
          </Card>
        </View>

        <PrimaryButton
          label="Volver a la lista"
          iconName="arrow-back"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </ScrollView>
    </View>
  );
};

export default PetDetailScreen;

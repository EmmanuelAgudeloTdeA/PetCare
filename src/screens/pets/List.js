import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { INITIAL_PETS } from '../../../assets/data/petsData';
import { calculateAge } from '../../utils/dateUtils';
import Badge from '../../components/Badge';
import Loading from '../../components/Loading';
import { PetListStyles as styles } from '../../styles/screens/PetListStyles';
import { COLORS } from '../../../assets/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const PetListScreen = () => {
  const navigation = useNavigation();
  const [pets, setPets] = useState([]);
  const [loadingPetId, setLoadingPetId] = useState(null);

  useEffect(() => {
    setPets(INITIAL_PETS);
  }, []);

  const handlePetPress = (item) => {
    setLoadingPetId(item.id);
    setTimeout(() => {
      setLoadingPetId(null);
      navigation.navigate('Details', { pet: item });
    }, 900);
  };

  const renderPetCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePetPress(item)}
      activeOpacity={0.7}
      disabled={loadingPetId !== null}
    >
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Badge
          text={item.species}
          backgroundColor={COLORS.secondary + '30'}
          textColor={COLORS.primary}
          style={styles.speciesBadgeMargin}
        />
        <Text style={styles.cardBreed}>{item.breed}</Text>
        <View style={styles.cardMeta}>
          <View style={styles.metaItem}>
            <Ionicons
              name="calendar-outline"
              size={13}
              color={COLORS.textSecondary}
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>{calculateAge(item.birthDate)}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons
              name="scale-outline"
              size={13}
              color={COLORS.textSecondary}
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>{item.weight} kg</Text>
          </View>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
    </TouchableOpacity>
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Ionicons
        name="paw-outline"
        size={64}
        color={COLORS.border}
        style={styles.emptyIcon}
      />
      <Text style={styles.emptyTitle}>Sin mascotas aún</Text>
      <Text style={styles.emptyText}>
        Registra tu primera mascota en la pestaña "Registrar".
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Ionicons
            name="paw"
            size={28}
            color="#FFFFFF"
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Mis Mascotas</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          {pets.length} mascota{pets.length !== 1 ? 's' : ''} registrada
          {pets.length !== 1 ? 's' : ''}
        </Text>
      </View>
      <FlatList
        data={pets}
        keyExtractor={item => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />

      {loadingPetId && <Loading message="Cargando mascota..." />}
    </SafeAreaView>
  );
};

export default PetListScreen;

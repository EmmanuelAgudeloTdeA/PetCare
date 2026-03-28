import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { COLORS } from '../../assets/styles/colors';
import { InfoItemStyles as styles } from '../styles/components/InfoItemStyles';

const InfoItem = ({ iconName, label, value }) => (
  <View style={styles.container}>
    <Ionicons name={iconName} size={22} color={COLORS.primary} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default InfoItem;

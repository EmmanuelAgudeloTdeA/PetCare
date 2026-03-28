import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { COLORS } from '../../assets/styles/colors';
import { OutlineButtonStyles as styles } from '../styles/components/OutlineButtonStyles';

const OutlineButton = ({ label, onPress, iconName, style }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    {iconName ? (
      <Ionicons name={iconName} size={18} color={COLORS.textSecondary} style={styles.icon} />
    ) : null}
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default OutlineButton;

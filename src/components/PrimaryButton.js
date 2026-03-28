import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { PrimaryButtonStyles as styles } from '../styles/components/PrimaryButtonStyles';

const PrimaryButton = ({ label, onPress, iconName, disabled, style }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
  >
    {iconName ? (
      <Ionicons name={iconName} size={18} color="#FFFFFF" style={styles.icon} />
    ) : null}
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;

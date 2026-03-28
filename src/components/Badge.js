import React from 'react';
import { View, Text } from 'react-native';
import { BadgeStyles as styles } from '../styles/components/BadgeStyles';

const Badge = ({ text, backgroundColor, textColor, style }) => (
  <View style={[styles.badge, { backgroundColor }, style]}>
    <Text style={[styles.text, { color: textColor }]}>{text}</Text>
  </View>
);

Badge.defaultProps = {
  backgroundColor: '#E0F2FE',
  textColor: '#0369A1',
};

export default Badge;

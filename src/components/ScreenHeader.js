import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { ScreenHeaderStyles as styles } from '../styles/components/ScreenHeaderStyles';

const ScreenHeader = ({ iconName, title, subtitle, style }) => (
  <View style={[styles.header, style]}>
    <View style={styles.row}>
      <Ionicons name={iconName} size={28} color="#FFFFFF" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

export default ScreenHeader;

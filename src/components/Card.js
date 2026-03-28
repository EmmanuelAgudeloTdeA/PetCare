import React from 'react';
import { View, Text } from 'react-native';
import { CardStyles as styles } from '../styles/components/CardStyles';

const Card = ({ children, title, style }) => (
  <View style={[styles.card, style]}>
    {title ? <Text style={styles.title}>{title}</Text> : null}
    {children}
  </View>
);

export default Card;

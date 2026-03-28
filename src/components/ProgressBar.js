import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../assets/styles/colors';
import { ProgressBarStyles as styles } from '../styles/components/ProgressBarStyles';

const ProgressBar = ({ progress, label, counter, color, style }) => (
  <View style={[styles.container, style]}>
    {(label || counter) ? (
      <View style={styles.header}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        {counter ? <Text style={styles.counter}>{counter}</Text> : null}
      </View>
    ) : null}
    <View style={styles.track}>
      <View
        style={[
          styles.fill,
          {
            width: `${Math.min(Math.max(progress, 0), 1) * 100}%`,
            backgroundColor: color || COLORS.primary,
          },
        ]}
      />
    </View>
  </View>
);

export default ProgressBar;

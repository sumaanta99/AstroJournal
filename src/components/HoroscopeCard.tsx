/**
 * This HoroscopeCard is used in the HomeScreen
 * to show date, sign and the horoscope of the day.
 * This can be extended much further with many 
 * subsections and lucky number, lucky color, etc.
 */

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { HoroscopeData } from '../types/HoroscopeType';

interface HoroscopeCardProps {
  data: HoroscopeData;
}

export function HoroscopeCard({ data }: HoroscopeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{data.date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sign}>
          {data.sign} {data.asset}
        </Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 12, 
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  content: {
    marginTop: 6,
  },
  sign: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

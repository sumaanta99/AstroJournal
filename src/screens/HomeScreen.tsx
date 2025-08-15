/**
 * This screen is the home screen of the app.
 * It displays:
 * - A dropdown to select the zodiac sign
 * - The horoscope for the selected sign and date
 * - A call-to-action button to start writing a journal entry
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchHoroscope } from '../services/astrologyApi';
import { HoroscopeData } from '../types/HoroscopeType';
import { HoroscopeCard } from '../components/HoroscopeCard';
import Dropdown from '../components/Dropdown';
import { ZODIAC_SIGNS, ZodiacSign } from '../types/ZodiacType';
import StartJournalButton from '../components/StartJournalButton';

export default function HomeScreen() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign>('aquarius');
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);

 
  useEffect(() => {
    loadData(selectedSign);
  }, [selectedSign]);

  /**
   * Fetch horoscope data for the given sign and set state
   * @param sign Zodiac sign to fetch horoscope for
   */
  const loadData = async (sign: ZodiacSign) => {
    const horoscopeData = await fetchHoroscope(sign, 'today');
    setHoroscope(horoscopeData);
  };

  return (
    <View style={styles.container}>

      <Dropdown
        value={selectedSign}
        onChange={setSelectedSign}
        items={ZODIAC_SIGNS}
      />

      {horoscope && <HoroscopeCard data={horoscope} />}

      <StartJournalButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f9f9f9', 
  },
  stickyButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

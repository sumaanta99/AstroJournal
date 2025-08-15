/**
 * This is the button to Start Journalling.
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartJournalButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.stickyButton}
      onPress={() => navigation.navigate('EditJournalScreen')}
    >
      <Text style={styles.buttonText}>Add Journal Entry</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stickyButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

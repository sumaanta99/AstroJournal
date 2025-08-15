/**
 * This is the button to save entry.
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SaveEntryButton({onPress}:{onPress:()=>{}}) {

  return (
    <TouchableOpacity
      style={styles.stickyButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Save Entry</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stickyButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    marginHorizontal:12,
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

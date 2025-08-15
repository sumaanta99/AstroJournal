/**
 * This JournalEntryItem shows up on JournalScreen
 * with date, title and subtext. This also has an option
 * to delete the item.
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { JournalEntry } from '../types/JournalEntryType';
import { useNavigation } from '@react-navigation/native';
import { useJournalContext } from '../context/JournalContext';
import Toast from 'react-native-toast-message';

type Props = {
  entry: JournalEntry;
};

export default function JournalEntryItem({ entry }: Props) {
  const navigation = useNavigation();
  const { deleteJournalEntry } = useJournalContext();

  const handleDelete = () => {
    deleteJournalEntry(entry.id);
    Toast.show({
      type: 'success',
      text1: 'Deleted Entry!',
      text2: 'Successfully deleted journal entry',
    });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('EditJournalScreen', { id: entry.id })}
      >
        <Text style={styles.date}>Date: {entry.date}</Text>
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.text} numberOfLines={3}>
          {entry.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center', // vertical center
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

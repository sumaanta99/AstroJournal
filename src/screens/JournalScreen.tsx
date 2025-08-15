/**
 * This screen displays all journal entries for the user.
 * It handles three states:
 * 1. Loading journal entries
 * 2. No entries exist (empty state)
 * 3. Displaying a list of entries with option to start a new journal
 */

import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import JournalEntryItem from '../components/JournalEntryItem';
import StartJournalButton from '../components/StartJournalButton';
import { useJournalContext } from '../context/JournalContext';
import NoJournalPlaceholder from '../components/NoJournalPlaceholder';

export default function JournalScreen() {
  const { entries, loading } = useJournalContext();

  // Show loading indicator while fetching entries
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading your journal entries...</Text>
      </View>
    );
  }

  // Show placeholder if no journal entries exist
  if (!entries.length) {
    return <NoJournalPlaceholder />;
  }

  return (
    <>
      <FlatList
        data={entries} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => <JournalEntryItem entry={item} />} 
        contentContainerStyle={styles.list} 
      />
      
      <StartJournalButton />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 100, 
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

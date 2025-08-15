/**
 * This screen allows the user to edit an existing journal
 * or add a new journal.
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, Text, ScrollView } from 'react-native';
import JournalEditor from '../components/JournalEditor';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useJournalContext } from '../context/JournalContext';
import SaveEntryButton from '../components/SaveEntryButton';
import Toast from 'react-native-toast-message';

/**
 * Type definition for route params.
 * If editing an existing entry, `id` is passed.
 */
type EditJournalRouteParams = {
  id?: string; 
};

export default function EditJournalScreen() {
  const navigation = useNavigation(); 
  const route = useRoute<RouteProp<Record<string, EditJournalRouteParams>, string>>();
  const { id } = route.params || {}; // Extract journal entry ID if provided

  const { entries, addJournalEntry, updateJournalEntry } = useJournalContext(); // Access journal context
  const existingEntry = id ? entries.find(e => e.id === id) : null; // Find entry if editing

  const [date, setDate] = useState(existingEntry?.date || '');
  const [title, setTitle] = useState(existingEntry?.title || '');
  const [text, setText] = useState(existingEntry?.text || '');

  /**
   * Populate editor fields when existing entry changes (e.g., fetched from storage)
   */
  useEffect(() => {
    if (existingEntry) {
      setDate(existingEntry.date);
      setTitle(existingEntry.title);
      setText(existingEntry.text);
    }
  }, [existingEntry]);

  /**
   * Save the journal entry.
   * - Validates all fields are filled
   * - Updates existing entry if `id` exists
   * - Otherwise adds a new entry
   * - Shows a toast message on success
   */
  const handleSave = async () => {
    if (!date || !title || !text) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (id) {
      await updateJournalEntry(id, title, text);
    } else {
      await addJournalEntry(date, title, text);
    }

    Toast.show({
      type: 'success',
      text1: 'Saved journal entry!',
      text2: 'Successfully saved your journal entry, keep going!',
    });

    navigation.goBack(); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>{id ? 'Edit Journal Entry' : 'New Journal Entry'}</Text>

      <JournalEditor
        date={date}
        title={title}
        text={text}
        onDateChange={setDate}
        onTitleChange={setTitle}
        onTextChange={setText}
      />
      
      <SaveEntryButton onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    gap: 20,
    flex:1
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12,
    color: '#222',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
 
});

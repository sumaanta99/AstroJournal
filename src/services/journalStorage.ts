import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { JournalEntry } from '../types/JournalEntryType';

const JOURNAL_KEY = '@astro/journal'; // Single key for all entries

// Get all entries
export async function getAllEntries(): Promise<JournalEntry[]> {
  try {
    const json = await AsyncStorage.getItem(JOURNAL_KEY);
    return json ? JSON.parse(json) : [];
  } catch (err) {
    console.error('Error getting all entries:', err);
    return [];
  }
}

// Add entry
export async function addEntry(date: string, title: string, text: string): Promise<JournalEntry> {
  try {
    const entries = await getAllEntries();
    const newEntry: JournalEntry = {
      id: uuid.v4() as string,
      date,
      title,
      text,
      updatedAt: Date.now(),
    };
    const updated = [...entries, newEntry];
    await AsyncStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    return newEntry;
  } catch (err) {
    console.error('Error adding entry:', err);
    throw err;
  }
}

// Update entry (partial fields allowed)
export async function updateEntry(
  id: string,
  updates: Partial<Pick<JournalEntry, 'title' | 'text'>>
): Promise<void> {
  try {
    const entries = await getAllEntries();
    const updated = entries.map(e =>
      e.id === id ? { ...e, ...updates, updatedAt: Date.now() } : e
    );
    await AsyncStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error updating entry:', err);
    throw err;
  }
}

// Delete entry
export async function deleteEntry(id: string): Promise<void> {
  try {
    const entries = await getAllEntries();
    const updated = entries.filter(e => e.id !== id);
    await AsyncStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error deleting entry:', err);
    throw err;
  }
}

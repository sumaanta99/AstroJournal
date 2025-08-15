import { useState, useCallback, useEffect } from 'react';
import { addEntry, updateEntry, deleteEntry, getAllEntries } from '../services/journalStorage';
import { JournalEntry } from '../types/JournalEntryType';

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Load all journal entries initially
  useEffect(() => {
    (async () => {
      try {
        const storedEntries = await getAllEntries();
        // Sort by updatedAt descending so latest is on top
        setEntries(storedEntries.sort((a, b) => b.updatedAt - a.updatedAt));
      } catch (err) {
        console.error('Failed to load journal entries:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Add new journal entry (put on top)
  const addJournalEntry = useCallback(async (date: string, title: string, text: string) => {
    try {
      const newEntry = await addEntry(date, title, text);
      setEntries(prev => [newEntry, ...prev]); // Add to front
    } catch (err) {
      console.error('Failed to add journal entry:', err);
    }
  }, []);

  // Update only changed fields and move updated entry to top
  const updateJournalEntry = useCallback(async (id: string, title?: string, text?: string) => {
    try {
      await updateEntry(id, { title, text });
      setEntries(prev => {
        const updatedEntry = prev.find(e => e.id === id);
        if (!updatedEntry) return prev;
        const updated = {
          ...updatedEntry,
          ...(title !== undefined && { title }),
          ...(text !== undefined && { text }),
          updatedAt: Date.now(),
        };
        return [updated, ...prev.filter(e => e.id !== id)]; // Move to front
      });
    } catch (err) {
      console.error('Failed to update journal entry:', err);
    }
  }, []);

  // Delete entry safely
  const deleteJournalEntry = useCallback(async (id: string) => {
    try {
      await deleteEntry(id);
      setEntries(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      console.error('Failed to delete journal entry:', err);
    }
  }, []);

  return {
    entries,
    loading,
    addJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
  };
}

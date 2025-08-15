import React, { createContext, useContext } from 'react';
import { useJournal } from '../hooks/useJournal';
import { JournalEntry } from '../types/JournalEntryType';

/**
 * Type definition for the JournalContext.
 * This defines what data and functions are exposed to any component
 * consuming the context.
 */
type JournalContextType = {
  entries: JournalEntry[]; // List of all journal entries
  loading: boolean; // Loading state while fetching entries
  addJournalEntry: (date: string, title: string, text: string) => Promise<void>; // Function to add a new entry
  updateJournalEntry: (id: string, title?: string, text?: string) => Promise<void>; // Function to update an existing entry
  deleteJournalEntry: (id: string) => Promise<void>; // Function to delete an entry
};

/**
 * Create the context with default undefined.
 * The actual value will be provided by the JournalProvider.
 */
const JournalContext = createContext<JournalContextType | undefined>(undefined);

/**
 * JournalProvider component wraps parts of the app that need access to journal entries.
 * It uses the `useJournal` hook and provides its returned values to children via context.
 */
export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const journal = useJournal(); // Custom hook managing journal logic (CRUD operations)
  return (
    <JournalContext.Provider value={journal}>
      {children} 
    </JournalContext.Provider>
  );
};

/**
 * Custom hook to consume JournalContext.
 * Ensures the context is used within a JournalProvider.
 * Throws an error if used outside the provider.
 */
export function useJournalContext() {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error('useJournalContext must be used within a JournalProvider');
  }
  return context;
}

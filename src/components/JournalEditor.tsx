/**
 * This JournalEditor component has all the textinputs
 * date, title and text for adding or editing a journal entry.
 */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface JournalEditorProps {
  date: string;
  title: string;
  text: string;
  onDateChange: (val: string) => void;
  onTitleChange: (val: string) => void;
  onTextChange: (val: string) => void;
}

export default function JournalEditor({
  date,
  title,
  text,
  onDateChange,
  onTitleChange,
  onTextChange,
}: JournalEditorProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={onDateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={onTitleChange}
      />
      <TextInput
        style={[styles.input, styles.largeInput]}
        placeholder="Write your thoughts..."
        value={text}
        onChangeText={onTextChange}
        multiline
        numberOfLines={20}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 12
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  largeInput: {
    height: 160,
  },
});

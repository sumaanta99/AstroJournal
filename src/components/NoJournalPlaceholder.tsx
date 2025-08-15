/**
 * This is a placeholder component
 * for when there are no journals.
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StartJournalButton from './StartJournalButton'

const NoJournalPlaceholder = () => {
  return (
    <View style={styles.center}>
      <View style={styles.card}>
      <Text style={styles.emptyText}>No journal entries yet!</Text>
      <Text style={styles.emptySubtitle}>Daily journal entries help maintain accountability. Click below to start writing one!</Text>
      </View>
      <StartJournalButton />
    </View>
  )
}

export default NoJournalPlaceholder

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor:'#A9A9A9',
    marginHorizontal: 12,
    padding:12
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    fontWeight:'600',
    textAlign:'center'
  },
  emptySubtitle:{
    fontSize: 16,
    color: '#666',
    fontWeight:'400',
    textAlign:'center'
  }
});

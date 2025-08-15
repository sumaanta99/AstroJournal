import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditJournalScreen from '../screens/EditJournalScreen';
import { RootStackTypes } from './RootStackTypes';
import DrawerStack from './DrawerStack';



const Stack = createNativeStackNavigator<RootStackTypes>();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='DrawerStack' >
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="EditJournalScreen" component={EditJournalScreen} />
    </Stack.Navigator>
  );
}

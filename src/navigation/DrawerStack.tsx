import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';


const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Journals" component={JournalScreen} />
    </Drawer.Navigator>
  );
}
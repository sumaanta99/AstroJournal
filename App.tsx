import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStack } from './src/navigation/RootStack';
import { enableScreens } from 'react-native-screens';
import { JournalProvider } from './src/context/JournalContext';
import Toast from 'react-native-toast-message';

enableScreens();

export default function App() {
  return (<>
    <SafeAreaProvider>
       <JournalProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      </JournalProvider>
    </SafeAreaProvider>
        <Toast />
        </>
  );
}


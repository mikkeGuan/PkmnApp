import React from 'react';
import {View, Text} from 'react-native';
import AudioPlayer from './components/AudioPlayer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './index'; 
import TeamPage from './pages/teamPage'; 

// Create a Drawer navigator
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={Index} 
          options={{ drawerLabel: 'Home' }} 
        />
        <Drawer.Screen 
          name="Teams" 
          component={TeamPage} 
          options={{ drawerLabel: 'Teams' }} 
        />
        
      </Drawer.Navigator>)
}

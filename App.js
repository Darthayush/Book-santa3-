import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'


export default function App() {
  return (
  <AppContainer/>
    );
  }

  const switchnavigator= createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    Drawer:{screeen:AppDrawerNavigator}
  })
  const AppContainer=createAppContainer(switchnavigator);
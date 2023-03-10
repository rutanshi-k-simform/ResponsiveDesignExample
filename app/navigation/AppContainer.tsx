import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type FC} from 'react';
import {ROUTES} from '../constants';
import {Home} from '../modules';
import type {RootStackParamList} from './Types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppContainer: FC = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={ROUTES.Home} component={Home} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppContainer;

import React from 'react';
import {ROUTES} from './constants';
import {
  AspectRatioExample,
  DimensionsExample,
  FlexBox,
  Home,
  MediaQueryExample,
  PercentageExample,
  PlatformExample,
} from './modules';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.flexExample]: undefined;
  [ROUTES.percentageExample]: undefined;
  [ROUTES.dimensionsExample]: undefined;
  [ROUTES.platformExample]: undefined;
  [ROUTES.aspectRatioExample]: undefined;
  [ROUTES.mediaQueryExample]: undefined;
};

const linking = {
  config: {screens: ROUTES},
  prefexis: ['webDemo://'],
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name={ROUTES.Home} component={Home} />
          <RootStack.Screen name={ROUTES.flexExample} component={FlexBox} />
          <RootStack.Screen
            name={ROUTES.percentageExample}
            component={PercentageExample}
          />
          <RootStack.Screen
            name={ROUTES.dimensionsExample}
            component={DimensionsExample}
          />
          <RootStack.Screen
            name={ROUTES.aspectRatioExample}
            component={AspectRatioExample}
          />
          <RootStack.Screen
            name={ROUTES.platformExample}
            component={PlatformExample}
          />
          <RootStack.Screen
            name={ROUTES.mediaQueryExample}
            component={MediaQueryExample}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;

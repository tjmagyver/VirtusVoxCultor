import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, View } from 'native-base';
import './ReactotronConfig';
import { THEME } from './src/theme';

import {
  InriaSans_300Light,
  InriaSans_400Regular,
  InriaSans_700Bold
} from '@expo-google-fonts/inria-sans';

import { Jost_400Regular } from '@expo-google-fonts/jost';
import { Kreon_400Regular } from '@expo-google-fonts/kreon';

import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes/index';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          InriaSans_300Light,
          InriaSans_400Regular,
          InriaSans_700Bold,
          Jost_400Regular,
          Kreon_400Regular
        });

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <StripeProvider publishableKey={`${process.env.STRIPE_PUBLIC_KEY}`}>
      <NavigationContainer>
        <NativeBaseProvider theme={THEME}>
          <View
            onLayout={onLayoutRootView}
            flex={1}
          >
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </View>
          <StatusBar
            style="dark"
            translucent
            backgroundColor='transparent'
          />
        </NativeBaseProvider>
      </NavigationContainer>
    </StripeProvider>
  );
}
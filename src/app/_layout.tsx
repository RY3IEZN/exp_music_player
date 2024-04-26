/** @format */

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;

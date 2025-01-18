import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import "@/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode="light">
        {/* 
          SafeAreaView ensures all children respect device insets 
          (e.g., notches, status bar, bottom gesture areas)
        */}
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            {/* Add more screens as needed */}
          </Stack>

          {/* StatusBar auto matches color scheme (light/dark) */}
          <StatusBar style="auto" />
        </SafeAreaView>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

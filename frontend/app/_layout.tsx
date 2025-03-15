import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen
          name="index" // The name of the screen
          options={{ headerShown: false }} // Disable the header for this screen
        />
        <Stack.Screen
          name="saved-recipes" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </GluestackUIProvider>
  );
}
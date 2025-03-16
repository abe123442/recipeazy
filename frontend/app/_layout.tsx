import { Stack } from 'expo-router';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen
          name="index" // The home screen
          options={{ headerShown: false }} // Hide the header for the home screen
        />
        <Stack.Screen
          name="screens/RecipeDetail" // The detailed recipe screen
          options={{ headerShown: true, title: 'Recipe Details' }} // Show the header for the detail screen
        />
      </Stack>
    </GluestackUIProvider>
  );
}

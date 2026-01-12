import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '../global.css';

import { Stack } from 'expo-router';
import { useState } from 'react';

export default function Layout() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}

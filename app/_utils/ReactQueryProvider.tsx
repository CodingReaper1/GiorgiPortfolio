"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 1 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
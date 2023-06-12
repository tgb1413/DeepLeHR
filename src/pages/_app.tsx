import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global, css } from '@emotion/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global
        styles={css`
          html {
            width: 100%;
            height: 100%;
          }
          body {
            width: 100%;
            height: 100%;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
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

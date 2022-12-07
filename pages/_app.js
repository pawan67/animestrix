import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/small-components/Loading";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

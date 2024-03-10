import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;

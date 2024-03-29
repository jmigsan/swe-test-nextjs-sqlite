import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

const Cryptocurrencies = () => {
  const bitcoinClicked = async () => {
    try {
      const response = await axios.put(
        'http://localhost:3000/api/addbitcoin/2'
      );
      if (response.ok) {
        alert('Bitcoin successfully added. Check your portfolio.');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const ethereumClicked = async () => {
    try {
      const response = await axios.put(
        'http://localhost:3000/api/addethereum/2'
      );
      if (response.ok) {
        alert('Ethereum successfully added. Check your portfolio.');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const dogeClicked = async () => {
    try {
      const response = await axios.put('http://localhost:3000/api/adddoge/2');
      if (response.ok) {
        alert('Dogecoin successfully added. Check your portfolio.');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main>
      <Stack>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
            alt='BTC'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Bitcoin</Heading>

              <Text py='2'>
                A decentralized digital currency, using peer-to-peer technology.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                variant='solid'
                colorScheme='orange'
                onClick={bitcoinClicked}
              >
                Buy
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png'
            alt='ETH'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Ethereum</Heading>

              <Text py='2'>
                An open-source blockchain platform, featuring smart contract
                functionality.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                variant='solid'
                colorScheme='gray'
                onClick={ethereumClicked}
              >
                Buy
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='data:image/jpeg;base64,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'
            alt='DOGE'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Dogecoin</Heading>

              <Text py='2'>
                A cryptocurrency with a Shiba Inu dog meme as its logo, focused
                on quick transactions.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                variant='solid'
                colorScheme='yellow'
                onClick={dogeClicked}
              >
                Buy
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Stack>
    </main>
  );
};
export default Cryptocurrencies;

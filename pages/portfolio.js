import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [username, setUsername] = useState(null);
  const [money, setMoney] = useState(null);

  const getUsername = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getusername');
      setUsername(response.data[0].name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getMoney = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getmoney');
      setMoney(response.data[0].money);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUsername();
    getMoney();
  }, []);

  return (
    <main>
      <Container>
        <Heading>Hello {username}</Heading>
        <div>Portfolio amount {money}</div>
      </Container>
    </main>
  );
};
export default Portfolio;

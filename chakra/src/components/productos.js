import React from 'react';
import {Card, Heading, CardBody, Text, CardFooter, Button, Image, Stack, Divider} from '@chakra-ui/react';
function Producto(){
    return (
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={require('../img/bici.jpg')}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Bicicleta Trek Mtb X-caliber 9 R29 Talle Xl</Heading>
      <Text>
      $300.000
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Button variant='solid' colorScheme='blue'>
    COMPRAR
    </Button>
  </CardFooter>
</Card>    
    )
}

export default Producto;
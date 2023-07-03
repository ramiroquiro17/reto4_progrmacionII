import React from 'react';
import {Card, Heading, CardBody, Text, CardFooter, Button, Image, Stack, Divider} from '@chakra-ui/react';
function Producto(props){
    return (
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={require(`../img/${props.img}.jpg`)}
      alt={props.nombre}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.nombre}</Heading>
      <Text>
      ${props.precio}
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
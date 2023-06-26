import React from 'react';
import {Card, Heading, CardBody, Image, Stack} from '@chakra-ui/react';

function Categorie4(){
    return (
        <Card  style={{width: "15rem", padding: 0, backgroundColor:'black'}} variant = {'unstyled'} maxW='sm'>
            <CardBody>
                <a href= "/repuestos">
                    <Image 
                    objectFit='cover'
                    src={require('../img/card04.png')}
                    alt=''
                    borderRadius='sm'
                    />
                </a>
                <Stack mt='6' spacing='3'>
                    <Heading align='center' style={{
                               paddingRight: 0,
                               paddingTop: -10,
                               paddingBottom: 20, color: 'white' }} size='md'>Repuestos</Heading>
                </Stack>
            </CardBody>
        </Card>    
    )
}

export default Categorie4;
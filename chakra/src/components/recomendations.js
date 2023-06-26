import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import { Heading } from '@chakra-ui/react';

export default function Recomendations(){
    return <>
      <Heading align='center'>Ofertas del momento</Heading>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5} margin={12} marginRight={-10} marginLeft={20} paddingLeft={10} variant = {'unstyled'}> 
          <SimpleGrid spacing={3} minChildWidth={250}>
            <Producto />
            <Producto />
            <Producto />
          </SimpleGrid>
        </GridItem>
      </Grid></>
}
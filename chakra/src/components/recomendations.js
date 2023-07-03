import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import { Heading } from '@chakra-ui/react';

export default function Recomendations(){
    return <>
      <Heading align='center'>Ofertas del momento</Heading>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5} margin={12} marginRight={-10} marginLeft={20} paddingLeft={10} variant = {'unstyled'}> 
          <SimpleGrid spacing={3} minChildWidth={250}>
            <Producto
            nombre="Venzo SKYLINE Shadow R29 Rojo T18"
            img="bici1"
            precio="300.000" />
            <Producto 
            nombre="Casco Vertigo VX Negro Brillante TALLE M"
            img="ind3"
            precio="170.000"/>
            <Producto 
            nombre="Cable Rulo 10 x 1500mm FireBird"
            img="acc1"
            precio="3.000"/>
          </SimpleGrid>
        </GridItem>
      </Grid></>
}
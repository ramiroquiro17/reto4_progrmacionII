import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import Sidebar from '../components/lista';
import Navbar from '../components/barraNavegacion';
import Footer from '../components/footer';
export default function Bicicletas(){
    return (<><Navbar /><Grid templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1} as="aside">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={5} margin={12}>
        <SimpleGrid spacing={4} minChildWidth={250}>
          <Producto 
          nombre="Venzo SKYLINE Shadow R29 Negro Rojo T18"
          img="bici1"
          precio="300.000"/>
          <Producto 
          nombre="Bicicleta Mojave 4.0 R29"
          img="bici2"
          precio="250.000"/>
          <Producto 
          nombre="Bicicleta Raleigh 700C Classic Nexus 3V."
          img="bici3"
          precio="350.000"/>
          <Producto nombre="Venzo SKYLINE Shadow R29 Negro Rojo T18"
          img="bici1"
          precio="300.000"/>
          <Producto 
          nombre="Bicicleta Mojave 4.0 R29"
          img="bici2"
          precio="250.000"/>
          <Producto 
          nombre="Bicicleta Raleigh 700C Classic Nexus 3V."
          img="bici3"
          precio="350.000"/>
        </SimpleGrid>
      </GridItem>
    </Grid>
    <Footer/></>)
}
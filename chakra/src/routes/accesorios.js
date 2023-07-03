import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import Sidebar from '../components/lista';
import Navbar from '../components/barraNavegacion';
import Footer from '../components/footer';
export default function Accesorios(){
    return (<><Navbar />
    <Grid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1} as="aside">
      <Sidebar />
    </GridItem>
    <GridItem colSpan={5} margin={12}>
      <SimpleGrid spacing={4} minChildWidth={250}>
        <Producto 
        nombre="Cable Rulo 10 x 1500mm FireBird"
        img="acc1"
        precio="3.000"/>
        <Producto   
        nombre="Parche redondo 30mm TG"
        img="acc2"
        precio="100"/>
        <Producto 
        nombre="Bolsito Bajo Asiento Basico"
        img="acc3"
        precio="5.000"/>
        <Producto 
        nombre="Cable Rulo 10 x 1500mm FireBird"
        img="acc1"
        precio="3.000"/>
        <Producto 
        nombre="Parche redondo 30mm TG"
        img="acc2"
        precio="100"/>
        <Producto 
        nombre="Bolsito Bajo Asiento Basico"
        img="acc3"
        precio="5.000"/>
      </SimpleGrid>
    </GridItem>
  </Grid>
  <Footer/></>)
}
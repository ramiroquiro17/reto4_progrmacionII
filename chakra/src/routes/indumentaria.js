import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import Sidebar from '../components/lista';
import Navbar from '../components/barraNavegacion';
import Footer from '../components/footer';
export default function Indumentaria(){
    return (<><Navbar />
    <Grid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1} as="aside">
      <Sidebar />
    </GridItem>
    <GridItem colSpan={5} margin={12}>
      <SimpleGrid spacing={4} minChildWidth={250}>
      <Producto 
      nombre="Casco Raleigh R-15 NEGRO Talle L"
      img="ind1"
      precio="150.000"/>
      <Producto 
      nombre="Zapatilla Shimano MTB SH-ME2 Negro Talle 37"
      img="ind2"
      precio="300.000"/>
      <Producto 
      nombre="Casco Vertigo VX Negro Brillante TALLE M"
      img="ind3"
      precio="170.000"/>
      <Producto 
      nombre="Casco Raleigh R-15 NEGRO Talle L"
      img="ind1"
      precio="150.000"/>
      <Producto 
      nombre="Zapatilla Shimano MTB SH-ME2 Negro Talle 37"
      img="ind2"
      precio="300.000"/>
      <Producto 
      nombre="Casco Vertigo VX Negro Brillante TALLE M"
      img="ind3"
      precio="170.000"/>
      </SimpleGrid>
    </GridItem>
  </Grid>
  <Footer/></>
  
  )
}
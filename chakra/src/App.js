import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

import Producto from '../components/productos';
import Sidebar from '../components/lista';
import Navbar from '../components/navbar';

function App() {
  return ( 
    <><Navbar /><Grid templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1} as="aside">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={5} margin={12}>
        <SimpleGrid spacing={4} minChildWidth={250}>
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
        </SimpleGrid>
      </GridItem>
    </Grid></>
  )
}
export default App;

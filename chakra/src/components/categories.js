import React from 'react';
import {Grid, GridItem, SimpleGrid} from '@chakra-ui/react';
import Categorie from '../components/categorie';
import Categorie2 from '../components/categorie2';
import Categorie3 from '../components/categorie3';
import Categorie4 from '../components/categorie4';

function Categories() {
    return (
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5} margin={12} marginRight={-10} marginLeft={20} paddingLeft={10}>
          <SimpleGrid spacing={2} minChildWidth={230}>
            <Categorie />
            <Categorie2 />
            <Categorie3 />
            <Categorie4 />
          </SimpleGrid>
        </GridItem>
      </Grid>
    )
}

export default Categories;
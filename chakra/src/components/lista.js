import { Box, VStack, Button, StackDivider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Box
      bg="gray.200"
      w="64"
      minH="100vh"
      py="6"
      px="4"
      display={{ base: 'none', md: 'block' }}
    >
      <VStack spacing="4" align="stretch" divider={<StackDivider/>}>
        <Link to={'/bicicletas'}>
            <Button variant="ghost" size="lg">
            Bicicletas
            </Button>
        </Link>
        <Link to={'/accesorios'}>
            <Button variant="ghost" size="lg">
            Accesorios
            </Button>
        </Link>
        <Link to={'/indumentaria'}>
            <Button variant="ghost" size="lg">
            Indumentaria
            </Button>
        </Link>
        <Link to={'/repuestos'}>
            <Button variant="ghost" size="lg">
            Repuestos
            </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
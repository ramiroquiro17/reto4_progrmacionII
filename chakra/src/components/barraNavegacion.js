import { Image, Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react';
import { ChevronDownIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box bg="#232323" px="4" py="2">
      <Flex align="center">
        <Box>
          <Image
            src={require('../img/Logo1.jpg')}
            width={200}
          />
        </Box>
        <Link to={"/"}>
          <Button color='grey' bg="#232323" _hover={{ bg: '#272626' }} size="md">Inicio</Button>
        </Link>
        <Link to={"/"}>
          <Button color='grey' bg="#232323" _hover={{ bg: '#272626' }} size="md">Contacto</Button>
        </Link>
        <Link to={"/registrarse"}>
          <Button color='grey' bg="#232323" _hover={{ bg: '#272626' }} size="md">Registrarse</Button>
        </Link>
        <Menu>
          <MenuButton color='grey' as={Button} bg="#232323" _hover={{ bg: '#272626' }} size="md" rightIcon={<ChevronDownIcon />}>
            Productos
          </MenuButton>
          <MenuList>
            <Link to={"/bicicletas"}>
              <MenuItem>Bicicletas</MenuItem>
            </Link>
            <Link to={"/accesorios"}>
              <MenuItem>Accesorios</MenuItem>
            </Link>
            <Link to={"/indumentaria"}>
              <MenuItem>Indumentaria</MenuItem>
            </Link>
            <Link to={"/repuestos"}>
             <MenuItem>Repuestos</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Spacer />
        <Input type='text' placeholder='Buscar' htmlSize={16} width='auto' backgroundColor='white'/>
      </Flex>
    </Box>
  );
}

export default Navbar;

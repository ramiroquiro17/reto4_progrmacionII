import { Image, Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
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
        <Link to={"/"}>
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
        <InputGroup w="md">
          <Input placeholder="Buscar" />
          <InputRightElement>
            <SearchIcon color="gray.400" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;

import { Box } from '@chakra-ui/react';
import Navbar from '../components/barraNavegacion';
import Formulario from '../components/formulario';
import Footer from '../components/footer';
export default function Registrarse(){
    return (
    <><Navbar />
    <Box m='20px'>
        <Formulario />
    </Box>
    <Footer/></>)
}

import { Box, FormControl, FormLabel,  Input, Button, Checkbox } from "@chakra-ui/react";
import React from "react";

export default function Formulario(){
  return (
    <Box>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Introduzca su email" />
      </FormControl>

      <FormControl>
        <FormLabel>Contraseña</FormLabel>
        <Input type="text" placeholder="Introduzca una contraseña" />
      </FormControl>
      
      <FormControl>
       <FormLabel>Nombre</FormLabel>
       <Input type='text' placeholder="Nombre" />
      </FormControl>

     <FormControl>
       <FormLabel>Dirección</FormLabel>
       <Input type='text' placeholder="Dirección" />
     </FormControl>

     <FormControl>
       <FormLabel>Ciudad</FormLabel>
       <Input type='text' placeholder="Introduzca nombre de su ciudad" />
     </FormControl>

     <FormControl>
       <FormLabel>Código postal</FormLabel>
       <Input type='text' placeholder="Introduzca su código postal" />
     </FormControl>

     <FormControl>
       <FormLabel>País</FormLabel>
       <Input type='text' placeholder="Introduzca su país" />
     </FormControl>

     <Checkbox margin={4}>Acepto los términos</Checkbox>

      <Button colorScheme="teal" margin={2}>Registrarse</Button>
    </Box>
  );
};


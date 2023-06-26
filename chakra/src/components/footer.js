import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Text,
  Container,
} from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              < Link>Contrinute</ Link>
              < Link>Media assets</ Link>
              < Link>Changelog</ Link>
              < Link>Releases</ Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              < Link>Chat on Discord</ Link>
              < Link>Follow on Twitter</ Link>
              < Link>Follow on Github</ Link>
              < Link>Github discussions</ Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              < Link>TemplatesKart</ Link>
              < Link>Documentation</ Link>
              < Link>Github organization</ Link>
              < Link>npm organization</ Link>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Container>
        <Text fontSize="md">
        © 2023 Copyright:{' '}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
             Bikeshop.com
          </Link>
        </Text>
      </Container>
    </Box>
  );
};


export default Footer;
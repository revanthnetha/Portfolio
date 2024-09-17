import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram,  FaLinkedin, FaGithub } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = () => {
    return (
     <></>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        // bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text color={"white"}>© 2022 Revanth Portfolio. All rights reserved</Text>
          <Stack direction={'row'} spacing={6} color={"white"}>
            <SocialButton label={'Github'} href={"https://github.com/revanthnetha"}>
              <FaGithub /> 
            </SocialButton>
            <SocialButton label={'Linkedin'} href={"https://www.linkedin.com/in/bandi-revanth-9819701ba/"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={"https://instagram.com/_netha_revanth_007?igshid=ZDc4ODBmNjlmNQ=="}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }
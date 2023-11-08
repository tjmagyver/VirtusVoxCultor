import { Input } from '@components/Input';
import { Box, Checkbox, Image, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";
import IconApplication from '@assets/icon.png';
export function SignIn() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="flex-start" px={30}>
      <Image
        source={BackgroundImage}
        alt="Biblioteca"
        resizeMode="contain"
        position="absolute"
      />
      <Image
        source={IconApplication}
        alt="Ícone da aplicação"
        resizeMode="cover"
        marginTop="60px"
        w="210px"
        h="210px"
      />

      <Text
        fontFamily="Kreon_400Regular"
        color="white"
        fontSize="30px"
        textAlign="center"
        lineHeight="40px"
        w="246px"
        marginTop="24px"
      >
        O acervo da editora Cultor de Livros, como conselhos ao pé do ouvido.
      </Text>
      <VStack alignItems="center" justifyContent="flex-start" w="100%" mt="24px">
        <Box w="80%">
          <Text
            fontFamily="InriaSans_400Regular"
            color="white"
            fontSize="15px"
            textAlign="center"
            lineHeight="40px"
          >Login ou e-mail</Text>
          <Input />
        </Box>
        <Box w="80%">
          <Text
            fontFamily="InriaSans_400Regular"
            color="white"
            fontSize="15px"
            textAlign="center"
            lineHeight="40px"
          >Senha</Text>
          <Input />
          <Text
            fontFamily="InriaSans_400Regular"
            color="#00F0FF"
            fontSize="12px"
            textAlign="right"
            lineHeight="40px"
          >*Esqueci minha senha</Text>
          <Box flexDir="row" alignItems="center" mt="-8px">
            <Checkbox
              value="one"
              colorScheme="teal"
              size="sm"
              aria-label="Lembrar de mim"
            />
            <Text
              fontFamily="InriaSans_400Regular"
              color="white"
              fontSize="12px"
              lineHeight="40px"
              marginLeft="6px"
            >Lembrar de mim</Text>
          </Box>
        </Box>
        <Text
          fontFamily="InriaSans_400Regular"
          color="white"
          fontSize="22px"
          lineHeight="40px"
          marginTop="6px"
        >Ainda não sou cadastrado</Text>
      </VStack>
    </VStack>
  )
}
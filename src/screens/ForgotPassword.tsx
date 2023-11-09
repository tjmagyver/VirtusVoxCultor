import { Input } from '@components/Input';
import { Box, Button as ButtonNativeBase, Image, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";

import IconApplication from '@assets/icon.png';

import { Button } from '@components/Button';
export function ForgotPassword() {
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
        marginTop={8}
        w="240px"
        h="240px"
      />
      <VStack alignItems="center" justifyContent="flex-start" w="100%" mt={2}>
        <Text
          fontFamily="heading"
          color="white"
          fontSize="25px"
          textAlign="center"
          w="68%"
          mt={6}
        >
          Esqueci minha senha
        </Text>
        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize="15px"
          textAlign="center"
          w="68%"
          mt={6}
          mb={10}
        >
          Enviaremos instruções para
          que você possa recuperar a sua senha.
        </Text>
        <Box w="95%">
          <Text
            fontFamily="inriaRegular"
            color="white"
            fontSize="15px"
            textAlign="center"
            lineHeight="40px"
          >Email:</Text>
          <Input />
        </Box>
        <Button
          title="Enviar"
          w="80%"
          mt={8}
          h={52}
        />

        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize={"16px"}
          lineHeight="40px"
          marginTop="6px"
        >Ainda não sou cadastrado</Text>

        <Box w="100%" alignItems="flex-start" mt={8}>
          <ButtonNativeBase
            bg="transparent"
            _pressed={{ bg: "transparent" }}
            _text={{
              color: "white",
              fontSize: "20px",
              fontFamily: "inriaRegular"
            }}
          >
            {'< Voltar'}
          </ButtonNativeBase>
        </Box>
      </VStack>
    </VStack>
  )
}
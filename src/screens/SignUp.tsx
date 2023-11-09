import { Input } from '@components/Input';
import {
  Box,
  Button as ButtonNativeBase,
  HStack,
  Image, ScrollView, Text,
  VStack
} from "native-base";

import BackgroundImage from "@assets/background.png";

import IconApplication from '@assets/icon.png';

import { Button } from '@components/Button';
export function SignUp() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} alignItems="center" justifyContent="flex-start" px={30} pb={14}>
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
          mt={8}
          w="200px"
          h="200px"
        />
        <VStack alignItems="center" justifyContent="flex-start" w="100%" mt={2}>
          <Box w="100%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="15px"
              textAlign="left"
              lineHeight="40px"
            >Nome:</Text>
            <Input />
          </Box>
          <Box w="100%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="15px"
              textAlign="left"
              lineHeight="40px"
            >Email:</Text>
            <Input />
          </Box>
          <Box w="100%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="15px"
              textAlign="left"
              lineHeight="40px"
            >Usuário:</Text>
            <Input />
          </Box>
          <HStack w="100%" justifyContent="space-between">
            <Box w="45%">
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize="15px"
                textAlign="left"
                lineHeight="40px"
              >Senha:</Text>
              <Input type="password" />
            </Box>
            <Box w="45%">
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize="15px"
                textAlign="left"
                lineHeight="40px"
              >Confirmar senha:</Text>
              <Input type="password" />
            </Box>
          </HStack>
          <Button
            title="Cadastrar"
            w="80%"
            mt={8}
          />

          <Text
            fontFamily="inriaRegular"
            color="white"
            fontSize="20px"
            textAlign="center"
            w="80%"
            mt={6}
          >
            Conheça nossos planos, e
            <Text
              color="teal.300"
            > ative seu acesso </Text>
            aos audiobooks.
          </Text>

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
    </ScrollView>
  )
}
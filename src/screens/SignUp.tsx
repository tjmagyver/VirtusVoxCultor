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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/routes/StackRoute';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

export function SignUp({ navigation }: SignUpProps) {
  function handleGoBack() {
    navigation.goBack();
  }

  function handleNavigatePlans() {
    navigation.navigate('Plans')
  }

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

          <ButtonNativeBase
            variant="link"
            onPress={handleNavigatePlans}
            w="90%"
          >
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="20px"
              textAlign="center"
              mt={6}
            >
              Conheça nossos planos, e
              <Text
                color="teal.300"
              > ative seu acesso </Text>
              aos audiobooks.
            </Text>
          </ButtonNativeBase>
          <Box w="100%" alignItems="flex-start" mt={8}>
            <ButtonNativeBase
              variant="link"
              onPress={handleGoBack}
            >
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize="20px"
              >
                {'< Voltar'}
              </Text>
            </ButtonNativeBase>
          </Box>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
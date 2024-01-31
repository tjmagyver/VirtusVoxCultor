import { Input } from '@components/Input';
import { Box, Button as ButtonNativeBase, Image, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";

import IconApplication from '@assets/icon.png';

import { Button } from '@components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@routes/auth.routes';
import { RFValue } from 'react-native-responsive-fontsize';

type ForgotPasswordProps = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>

export function ForgotPassword({ navigation }: ForgotPasswordProps) {
  function handleGoBack() {
    navigation.goBack();
  }

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
          fontSize={RFValue(25)}
          textAlign="center"
          w="68%"
          mt={6}
        >
          Esqueci minha senha
        </Text>
        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize={RFValue(15)}
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
            fontSize={RFValue(15)}
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
          fontSize={RFValue(16)}
          lineHeight="40px"
          marginTop="6px"
        >Ainda não sou cadastrado</Text>

        <Box w="100%" alignItems="flex-start" mt={8}>
          <ButtonNativeBase
            variant="link"
            onPress={handleGoBack}
          >
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(20)}
            >
              {'< Voltar'}
            </Text>
          </ButtonNativeBase>
        </Box>
      </VStack>
    </VStack>
  )
}
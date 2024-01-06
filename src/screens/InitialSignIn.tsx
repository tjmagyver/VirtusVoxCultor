import { Button as ButtonNativeBase, Image, Text, VStack } from "native-base";

import { Button } from "@components/Button";

import BackgroundImage from "@assets/background.png";
import IconApplication from '@assets/icon.png';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@routes/auth.routes";

type InitialSignInProps = NativeStackScreenProps<AuthStackParamList, 'InitialSignIn'>

export function InitialSignIn({ navigation }: InitialSignInProps) {
  function handleNavigateSignIn() {
    navigation.navigate('SignIn')
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp')
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
        marginTop={24}
        w="210px"
        h="210px"
      />

      <Text
        fontFamily="heading"
        color="white"
        fontSize="30px"
        textAlign="center"
        lineHeight="40px"
        w="246px"
        marginTop={10}
      >
        O acervo da editora Cultor de Livros, como conselhos ao pé do ouvido.
      </Text>
      <Button
        width={268}
        height={52}
        mt={12}
        title="Acessar"
        onPress={handleNavigateSignIn}
      />
      <ButtonNativeBase
        variant="link"
        onPress={handleNavigateSignUp}
      >
        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize="22px"
          lineHeight="40px"
          marginTop="6px"
        >
          Ainda não sou cadastrado
        </Text>
      </ButtonNativeBase>
    </VStack>
  )
}
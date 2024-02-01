import { Button as ButtonNativeBase, Image, Text, VStack } from "native-base";

import { Button } from "@components/Button";

import BackgroundImage from "@assets/background.png";
import IconApplication from '@assets/icon.png';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@routes/auth.routes";
import { RFValue } from "react-native-responsive-fontsize";

type InitialSignInProps = NativeStackScreenProps<AuthStackParamList, 'InitialSignIn'>

export function InitialSignIn({ navigation }: InitialSignInProps) {
  function handleNavigateSignIn() {
    navigation.navigate('SignIn')
  }

  function handleNavigateSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="flex-start">
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
        fontSize='4xl'
        textAlign="center"
        lineHeight="40px"
        marginTop={10}
      >
        O acervo da editora {`\n`} 
        Cultor de Livros, {`\n`} 
        como conselhos ao {`\n`} 
        pé do ouvido.
      </Text>
      <Button
        width={RFValue(268)}
        mt={12}
        title="Acessar"
        display="flex"
        alignItems="center"
        onPress={handleNavigateSignIn}
      />
      <ButtonNativeBase
        variant="link"
        onPress={handleNavigateSignUp}
      >
        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize='2xl'
          lineHeight="40px"
          marginTop="6px"
        >
          Ainda não sou cadastrado
        </Text>
      </ButtonNativeBase>
    </VStack>
  )
}
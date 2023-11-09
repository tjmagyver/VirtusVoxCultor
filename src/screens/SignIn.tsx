import { Input } from '@components/Input';
import {
  Box, Button as ButtonNativeBase, Checkbox,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack
} from "native-base";

import AppleSvg from '@assets/appleSvg.svg';
import BackgroundImage from "@assets/background.png";
import FacebookSvg from '@assets/facebookSvg.svg';
import GoogleSvg from '@assets/googleSvg.svg';
import IconApplication from '@assets/icon.png';

import { Button } from '@components/Button';
import { SignInSocialButton } from '@components/SignInSocialButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/routes/StackRoute';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>

export function SignIn({ navigation }: SignInProps) {
  function handleNavigateSignUp() {
    navigation.navigate('SignUp')
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
          resizeMode="contain"
          marginTop="60px"
          w="180px"
          h="180px"
        />

        <VStack mt={'60px'}>
          <SignInSocialButton
            bg="white"
            textColor='gray.900'
            title="Entre com Google"
            icon={<Icon as={GoogleSvg} name="Google Svg" size="sm" />}
          />
          <SignInSocialButton
            mt="15px"
            bg="black"
            borderColor="white"
            borderWidth={1}
            textColor='white'
            title="Entre com ID Apple"
            icon={<Icon as={AppleSvg} name="Apple Svg" size="sm" />}
          />
          <SignInSocialButton
            mt="15px"
            bg="blue.500"
            textColor='white'
            title="Entre com Facebook"
            icon={<Icon as={FacebookSvg} name="Facebook Svg" size="sm" />}
          />
        </VStack>
        <VStack alignItems="center" justifyContent="flex-start" w="100%" mt="24px">
          <Box w="80%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="15px"
              textAlign="center"
              lineHeight="40px"
            >Login ou e-mail</Text>
            <Input />
          </Box>
          <Box w="80%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="15px"
              textAlign="center"
              lineHeight="40px"
            >Senha</Text>
            <Input type="password" />
            <Text
              fontFamily="inriaRegular"
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
                fontFamily="inriaRegular"
                color="white"
                fontSize="12px"
                lineHeight="40px"
                marginLeft="6px"
              >Lembrar de mim</Text>
            </Box>
          </Box>
          <Button
            title="Entrar"
            w="80%"
            h="40px"
            mt={6}
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
      </VStack>
    </ScrollView>
  )
}
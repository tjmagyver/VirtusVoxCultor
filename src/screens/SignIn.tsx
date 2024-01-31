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
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@routes/auth.routes';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import reactotron from 'reactotron-react-native';
import { z } from 'zod';
import { useAuth } from './../hooks/auth';

type SignInProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>

const authenticateBodySchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1)
})

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

export function SignIn({ navigation }: SignInProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, setValue, setError, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(authenticateBodySchema)
  });
  const { signInWithEmailAndPassword } = useAuth()

  function handleNavigateSignUp() {
    navigation.navigate('SignUp')
  }

  async function handleSignIn({ email, password }: AuthenticateBodySchema) {
    reactotron.log(email, password)
    setIsLoading(true)
    reactotron.log('saiu')
    try {
      await signInWithEmailAndPassword(email, password)
      setIsLoading(false)
    } catch (error: any) {
      reactotron.log(error.message)
      reactotron.log(error)
      Alert.alert("Falha no login", error.message)
      setIsLoading(false)
    }
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
            opacity={0.4}
            bg="white"
            textColor='gray.900'
            title="Entre com Google"
            icon={<Icon as={GoogleSvg} name="Google Svg" size="sm" />}
          />
          <SignInSocialButton
            opacity={0.4}
            mt="15px"
            bg="black"
            borderColor="white"
            borderWidth={1}
            textColor='white'
            title="Entre com ID Apple"
            icon={<Icon as={AppleSvg} name="Apple Svg" size="sm" />}
          />
          <SignInSocialButton
            opacity={0.4}
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
              fontSize={RFValue(15)}
              textAlign="center"
              lineHeight="40px"
            >Login ou e-mail</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email:"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email &&
              <Text
                fontFamily="inriaRegular"
                color="red.500"
              >Campo obrigatório.</Text>
            }
          </Box>
          <Box w="80%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(15)}
              textAlign="center"
              lineHeight="40px"
            >Senha</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Senha:"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  type="password"
                />
              )}
              name="password"
            />
            {errors.password &&
              <Text
                fontFamily="inriaRegular"
                color="red.500"
              >Campo obrigatório.</Text>
            }
            <Text
              fontFamily="inriaRegular"
              color="#00F0FF"
              fontSize={RFValue(12)}
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
                fontSize={RFValue(12)}
                lineHeight="40px"
                marginLeft="6px"
              >Lembrar de mim</Text>
            </Box>
          </Box>
          <Button
            isLoading={isLoading}
            title="Entrar"
            w="80%"
            h="40px"
            mt={6}
            onPress={handleSubmit(handleSignIn)}
          />
          <ButtonNativeBase
            variant="link"
            onPress={handleNavigateSignUp}
          >
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(22)}
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
import { Input } from '@components/Input';
import {
  Box,
  Button as ButtonNativeBase,
  HStack,
  Image, ScrollView, Text,
  VStack
} from "native-base";
import Reactotron from 'reactotron-react-native';

import BackgroundImage from "@assets/background.png";

import IconApplication from '@assets/icon.png';

import { Button } from '@components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@routes/auth.routes';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { z } from 'zod';
import { api } from './../services/api';

type SignUpProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>

const createAccountBodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  username: z.string().min(1),
  password: z.string().min(1),
  passwordConfirm: z.string().min(1, 'Campo obrigatório.')
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

export function SignUp({ navigation }: SignUpProps | any) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, setValue, setError, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    },
    resolver: zodResolver(createAccountBodySchema)
  });

  function handleNavigateLogin() {
    navigation.navigate('SignIn')
  }

  const handleSignUp = async (data: CreateAccountBodySchema) => {
    if (data.password !== data.passwordConfirm) {
      return setError('passwordConfirm', { type: 'custom', message: 'Senhas não conferem.' });
    }

    setIsLoading(true)

    const formData = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password
    }

    try {
      await api.post('/accounts', formData)
      setIsLoading(false)
      handleNavigateLogin()
    } catch (error) {
      Reactotron.log(error);
      setIsLoading(false)
      Alert.alert("Criar conta", "Erro ao criar conta!")
    }
    Reactotron.log(data);
  };

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
              fontSize={RFValue(15)}
              textAlign="left"
              lineHeight="40px"
            >Nome:</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nome:"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            {errors.name &&
              <Text
                fontFamily="inriaRegular"
                color="red.500"
              >Campo obrigatório.</Text>
            }
          </Box>
          <Box w="100%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(15)}
              textAlign="left"
              lineHeight="40px"
            >Email:</Text>
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
          <Box w="100%">
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(15)}
              textAlign="left"
              lineHeight="40px"
            >Usuário:</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Usuário:"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username &&
              <Text
                fontFamily="inriaRegular"
                color="red.500"
              >Campo obrigatório.</Text>}
          </Box>
          <HStack w="100%" justifyContent="space-between">
            <Box w="45%">
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize={RFValue(15)}
                textAlign="left"
                lineHeight="40px"
              >Senha:</Text>
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
            </Box>
            <Box w="45%">
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize={RFValue(15)}
                textAlign="left"
                lineHeight="40px"
                noOfLines={1}
              >Confirmar senha:</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Confirmar senha:"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    type="password"
                  />
                )}
                name="passwordConfirm"
              />
              {errors.passwordConfirm &&
                <Text
                  fontFamily="inriaRegular"
                  color="red.500"
                >{errors.passwordConfirm.message}</Text>
              }
            </Box>
          </HStack>
          <Button
            isLoading={isLoading}
            title="Cadastrar"
            w="80%"
            mt={8}
            onPress={handleSubmit(handleSignUp)}
          />

          <ButtonNativeBase
            variant="link"
            onPress={handleNavigatePlans}
            w="100%"
          >
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize={RFValue(20)}
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
                fontSize={RFValue(20)}
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
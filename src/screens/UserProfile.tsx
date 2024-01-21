import { Header } from "@components/Header";
import {
  Button,
  HStack, Image, ScrollView,
  Text,
  VStack
} from "native-base";

import BookGuideIconImage from '@assets/bookGuideIcon.png';
import BookIconImage from '@assets/bookIcon.png';
import BooksIconImage from '@assets/booksIcon.png';
import MedalIconImage from '@assets/medalIcon.png';
import PolygonIconGrayImage from '@assets/polygonIconGray.png';

import { CardReaderProfileType } from "@components/CardReaderProfileType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@routes/app.routes";
import { useAuth } from "./../hooks/auth";

type UserProfileProps = NativeStackScreenProps<AppStackParamList, 'UserProfile'>

export function UserProfile({ navigation }: UserProfileProps) {
  const { user, signOut } = useAuth()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="background"
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack
          mt="75px"
          px="40px"
          alignItems="center"
        >
          <Text
            fontFamily="inriaRegular"
            fontSize="24px"
            color="red.900"
            textAlign="center"
          >
            Perfil de Leitor
          </Text>
          <Text
            fontFamily="inriaRegular"
            fontSize="15px"
            color="teal.100"
            textAlign="center"
            mt="17px"
          >
            Leitor Iniciante
          </Text>
          <Image
            source={PolygonIconGrayImage}
            alt="Polygon Icon Gray"
            resizeMode="contain"
            mt="7px"
          />
        </VStack>
        <VStack
          w="100%"
          alignItems="center"
          mt="7px"
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <HStack ml="10px" mr="10px">
              <CardReaderProfileType
                image={BookGuideIconImage}
              />
              <CardReaderProfileType
                isReaderProfileTypeCurrent
                image={BookIconImage}
              />
              <CardReaderProfileType
                image={BooksIconImage}
              />
              <CardReaderProfileType
                image={MedalIconImage}
              />
            </HStack>
          </ScrollView>
          <Text
            fontFamily="inriaRegular"
            fontSize="12px"
            color="gray.300"
            textAlign="center"
            mt="17px"
            w="78px"
          >
            Média semanal 3h
          </Text>
        </VStack>
        <VStack
          mt="30px"
          w="100%"
          px="36px"
        >
          <VStack>
            <Text
              fontFamily="inriaRegular"
              fontSize="15px"
              color="gray.900"
              mb="-10px"
            >
              Nome de usuário:
            </Text>
            <HStack
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontFamily="inriaRegular"
                fontSize="20px"
                color="gray.300"
              >
                {user?.name}
              </Text>
              <Button
                variant="link"
              >
                <Text
                  fontFamily="inriaRegular"
                  fontSize="20px"
                  color="blue.100"
                >
                  Alterar senha
                </Text>
              </Button>
            </HStack>
          </VStack>
          <VStack mt={5}>
            <Text
              fontFamily="inriaRegular"
              fontSize="15px"
              color="gray.900"
            >
              E-mail vinculado:
            </Text>
            <Text
              fontFamily="inriaRegular"
              fontSize="20px"
              color="gray.300"
            >
              {user?.email}
            </Text>
          </VStack>
          <VStack mt={5}>
            <Text
              fontFamily="inriaRegular"
              fontSize="15px"
              color="gray.900"
            >
              Primeiro acesso:
            </Text>
            <Text
              fontFamily="inriaRegular"
              fontSize="20px"
              color="gray.300"
            >
              {new Date(user?.createdAt).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </Text>
          </VStack>
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            mt={12}
          >
            <VStack>
              <Text
                fontFamily="inriaRegular"
                color="gray.900"
                fontSize="15px"
              >
                Status da conta:
              </Text>
              <Text
                fontFamily="inriaRegular"
                color="blue.100"
                fontSize="16px"
              >
                {user?.isSigned ? 'Ativa' : 'Desativada'}
              </Text>
            </VStack>

            <VStack>
              <Text
                fontFamily="inriaRegular"
                color="gray.900"
                fontSize="15px"
              >
                Vigência
              </Text>
              <Text
                fontFamily="inriaRegular"
                color="blue.100"
                fontSize="16px"
              >
                até 03/01/2024
              </Text>
            </VStack>
          </HStack>
          <Button
            variant="link"
            mt={9}
          >
            <Text
              fontFamily="inriaRegular"
              fontSize="20px"
              color="blue.100"
            >
              Mudar método de pagamento
            </Text>
          </Button>
        </VStack>
        <HStack
          mt="35px"
          mb="40px"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button
            variant="link"
            onPress={handleGoBack}
          >
            <Text
              fontFamily="inriaRegular"
              fontSize="15px"
              color="gray.900"
            >
              {'< Voltar'}
            </Text>
          </Button>
          <Button
            variant="link"
            onPress={signOut}
          >
            <Text
              fontFamily="inriaRegular"
              fontSize="15px"
              color="red.900"
            >
              {'Sair do aplicativo'}
            </Text>
          </Button>
        </HStack>
      </ScrollView>
    </VStack>
  )
}
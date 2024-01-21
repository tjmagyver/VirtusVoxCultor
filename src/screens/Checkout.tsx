import { Box, Button as ButtonNativeBase, Image, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";
import PaymentsMethodsImage from '@assets/paymentsMethods.png';

import { Button } from "@components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@routes/app.routes";
import { CardField } from "@stripe/stripe-react-native";
import { Alert } from "react-native";
import { useAuth } from "../../src/hooks/auth";
import { api } from "../../src/services/api";

type CheckoutProps = NativeStackScreenProps<AppStackParamList, 'Checkout'>

const customAppearance = {
  font: {
    family: 'inriaRegular',
  },
  shapes: {
    borderRadius: 12,
    borderWidth: 0.5,
  },
  primaryButton: {
    shapes: {
      borderRadius: 20,
    },
  },
  colors: {
    primary: '#fcfdff',
    background: '#ffffff',
    componentBackground: '#f3f8fa',
    componentBorder: '#f3f8fa',
    componentDivider: '#000000',
    primaryText: '#000000',
    secondaryText: '#000000',
    componentText: '#000000',
    placeholderText: '#73757b',
  },
};

export function Checkout({ navigation }: CheckoutProps) {
  const route = useRoute<any>()
  const { productId } = route.params;
  const { user } = useAuth()

  console.log(productId)

  const handlePayment = async () => {
    try {
      console.log(productId, user?.email)
      await api.post('/checkout-session', {
        productId: productId,
        quantity: 1,
        planId: productId,
        email: user?.email
      })

      const userUpdatedWithSubscription = await api.patch(`/accounts/${user?.id}`)

      await AsyncStorage.setItem(`${process.env.ASYNC_STORAGE_KEY}`, JSON.stringify(userUpdatedWithSubscription));

      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      Alert.alert('Erro:', 'Aconteceu um erro ao buscar os parâmetros do pagamento.');
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      px={30}
      pb={14}
    >
      <Image
        source={BackgroundImage}
        alt="Biblioteca"
        resizeMode="contain"
        position="absolute"
      />
      <VStack alignItems="center" justifyContent="flex-start" w="100%" mt={16}>
        <Text
          fontFamily="inriaRegular"
          color="white"
          fontSize="25px"
          textAlign="center"
          w="68%"
          mt={6}
          lineHeight={"32px"}
        >
          <Text
            fontFamily="inriaBold"
          >
            {'Realizar inscrição'}
          </Text>
        </Text>

        <CardField
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />

        <Image
          source={PaymentsMethodsImage}
          alt="Métodos de pagamento"
          resizeMode="contain"
        />

        <Button
          title="Inscrever"
          w="194px"
          h={38}
          fontSize={18}
          fontFamily="inriaRegular"
          onPress={handlePayment}
        />
      </VStack>
      <Box w="100%" alignItems="flex-start" mt={5}>
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
  )
}
import { Box, Button as ButtonNativeBase, Image, ScrollView, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";
import PaymentsMethodsImage from '@assets/paymentsMethods.png';

import { Button } from "@components/Button";
import { CardPlans } from "@components/CardPlans";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/StackRoute";

type PlansProps = NativeStackScreenProps<RootStackParamList, 'Plans'>

export function Plans({ navigation }: PlansProps) {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    // i want remove scroll bar indicador
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
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
            Escolha seu {'\n'} plano de assinatura e
            <Text
              fontFamily="inriaBold"
            >
              {' junte-se a nós'}
            </Text>.
          </Text>

          <CardPlans
            mt="27px"
            title="Mensal"
            price="149,90"
          />

          <CardPlans
            title="Trimestral"
            price="129,90"
            mt="18px"
          />

          <CardPlans
            title="Anual"
            price="99,90"
            mt="18px"
            isBestOffer
          />

          <Image
            mt={5}
            source={PaymentsMethodsImage}
            alt="Métodos de pagamento"
            resizeMode="contain"
          />

          <Button
            title="Já sou assinante"
            w="194px"
            mt={6}
            h={38}
            fontSize={18}
          />

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
      </VStack>
    </ScrollView>
  )
}
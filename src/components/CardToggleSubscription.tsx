import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Switch, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { useAuth } from "./../hooks/auth";
import { api } from "./../services/api";

interface CardToggleSubscriptionProps {
  onCloseModal: () => void
}

export function CardToggleSubscription({ onCloseModal }: CardToggleSubscriptionProps) {
  const [isAutoRenew, setIsAutoRenew] = useState(false);
  const [subscription, setSubscription] = useState<any>({})
  const { user } = useAuth()
  const navigation = useNavigation<any>()
  const firstAccess = new Date(user?.createdAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  function handleNavigateToPlans() {
    onCloseModal()
    navigation.navigate('Plans')
  }

  async function getSubscription() {
    try {
      const { data } = await api.get('/checkout-session/find-one', {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      })

      const subscription = data.data?.[0].items?.data

      setSubscription(subscription)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCancelSubscription(subscriptionId: string) {
    await api.delete(`/delete-checkout-session/${subscriptionId}`)
    const userWithoutSubscription = {
      ...user,
      isSigned: false
    }

    await AsyncStorage.setItem(`${process.env.ASYNC_STORAGE_KEY}`, JSON.stringify(userWithoutSubscription));
  }

  useEffect(() => {
    getSubscription()

    return () => { getSubscription }
  }, [])

  return (
    <VStack
      bg="gray.950"
      rounded="10px"
      px="44px"
      h="160px"
      py="26px"
      justifyContent="space-between"
    >
      <HStack
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <VStack>
          <Text
            fontFamily="inriaRegular"
            color="white"
            fontSize="15px"
          >
            Status:
          </Text>
          <Text
            fontFamily="inriaRegular"
            color={`${user?.isSigned ? 'teal.300' : 'gray.300'}`}
            fontSize="16px"
          >
            {user?.isSigned ? 'Ativa' : 'Desativada'}
          </Text>
        </VStack>

        <VStack>
          <Text
            fontFamily="inriaRegular"
            color="white"
            fontSize="15px"
          >
            {user?.isSigned ? 'Vigência' : 'Primeiro Acesso'}
          </Text>
          <Text
            fontFamily="inriaRegular"
            color="teal.300"
            fontSize="16px"
          >
            {user?.isSigned ? 'até 03/01/2024' : user ? `${firstAccess}` : '03 de Outubro 2023'}
          </Text>
        </VStack>
      </HStack>

      {
        user?.isSigned ?
          <VStack>
            <HStack alignItems="center">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.350"
                offThumbColor="gray.350"
                onThumbColor="teal.300"
                isChecked={isAutoRenew}
                defaultIsChecked={isAutoRenew}
                onToggle={() => setIsAutoRenew(!isAutoRenew)}
              />
              <Text
                fontFamily="inriaRegular"
                color="white"
                fontSize="20px"
                ml={1}
              >Renovar automático</Text>
            </HStack>
            <Button
              variant="unstyled"
              py={0}
              bg="transparent"
              mt={2}
              ml='auto'
              onPress={() => handleCancelSubscription(subscription)}
            >
              <Text
                fontFamily="inriaRegular"
                color="red.900"
                fontSize="12px"
                textAlign="right"
              >
                cancelar assinatura
              </Text>
            </Button>
          </VStack>
          :
          <Button
            variant="unstyled"
            rounded="30px"
            w="283px"
            h="56px"
            py={0}
            borderWidth={1}
            borderColor="teal.300"
            bg="transparent"
            mt={3}
            onPress={handleNavigateToPlans}
          >
            <Text
              fontFamily="inriaRegular"
              color="white"
              fontSize="14px"
              textAlign="center"
            >
              Conheça nossos planos, e
              <Text
                color="teal.300"
              >
                {' ative seu '}
                {'\n'}
                {'acesso '}
              </Text>
              aos audiobooks.
            </Text>
          </Button>
      }
    </VStack>
  )
}
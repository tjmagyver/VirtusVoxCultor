import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Switch, Text, VStack } from "native-base";
import { useState } from "react";
import { useAuth } from "./../hooks/auth";

interface CardToggleSubscriptionProps {
  isSubscribed?: boolean;
}

export function CardToggleSubscription({
  isSubscribed = false
}: CardToggleSubscriptionProps) {
  const [isAutoRenew, setIsAutoRenew] = useState(false);
  const { user } = useAuth()
  const navigation = useNavigation<any>()

  function handleNavigateToPlans() {
    navigation.navigate('Plans')
  }

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
            color={`${isSubscribed ? 'teal.300' : 'gray.300'}`}
            fontSize="16px"
          >
            {isSubscribed ? 'Ativa' : 'Desativada'}
          </Text>
        </VStack>

        <VStack>
          <Text
            fontFamily="inriaRegular"
            color="white"
            fontSize="15px"
          >
            {isSubscribed ? 'Vigência' : 'Primeiro Acesso'}
          </Text>
          <Text
            fontFamily="inriaRegular"
            color="teal.300"
            fontSize="16px"
          >
            {isSubscribed ? 'até 03/01/2024' : user ? `${user?.createdAt}` : '03 de Outubro 2023'}
          </Text>
        </VStack>
      </HStack>

      {
        isSubscribed ?
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
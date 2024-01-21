import { Button, HStack, Image, Modal, Text, VStack } from "native-base";
import { useState } from "react";

import OptionsIconImage from '@assets/optionsIcon.png';
import ProfileIconImage from '@assets/profileIcon.png';
import SearchIconImage from '@assets/searchIcon.png';
import VirtusIconInactiveImage from '@assets/virtusIconInactive.png';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "./../hooks/auth";
import { CardToggleSubscription } from "./CardToggleSubscription";

export function Header() {
  const [
    showModalCardToggleSubscription,
    setShowModalCardToggleSubscription
  ] = useState(false);
  const navigation = useNavigation<any>()
  const route = useRoute()
  const { user } = useAuth()

  function handleNavigateToUserOptions() {
    if (route.name !== 'UserOptions') {
      navigation.navigate('UserOptions')
    }
  }

  function handleNavigateToUserProfile() {
    if (route.name !== 'UserProfile') {
      navigation.navigate('UserProfile')
    }
  }

  return (
    <HStack
      bg="gray.900"
      w="100%"
      h="80px"
      px="14px"
      pt="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        variant="unstyled"
        px={0}
        py={0}
        onPress={() => setShowModalCardToggleSubscription(true)}
      >
        <HStack
          alignItems="center"
        >
          <Image
            source={VirtusIconInactiveImage}
            alt="Ícone da aplicação inativo"
            resizeMode="contain"
            w="44px"
            h="44px"
            mr="9px"
          />

          <VStack>
            <Text
              fontSize="12px"
              fontFamily="inriaRegular"
              color="white"
            >
              Status:
            </Text>
            <Text
              fontSize="14px"
              fontFamily="inriaRegular"
              color="gray.300"
            >
              {
                user.isSigned ? 'Ativa' : 'Desativada'
              }
            </Text>
          </VStack>
        </HStack>
      </Button>

      <Modal
        isOpen={showModalCardToggleSubscription}
        onClose={() => setShowModalCardToggleSubscription(false)}
      >
        <Modal.Content
          position="absolute"
          top="89px"
          bg="gray.900"
          w="366px"
        >
          <CardToggleSubscription onCloseModal={() => setShowModalCardToggleSubscription(false)} />
        </Modal.Content>
      </Modal>

      <Button
        variant="unstyled"
        px={0}
        py={0}
        onPress={handleNavigateToUserProfile}
      >
        <HStack
          alignItems="center"
        >
          <Image
            source={ProfileIconImage}
            alt="Ícone de perfil"
            resizeMode="contain"
            w="32px"
            h="32px"
            mr="6px"
          />

          <VStack>
            <Text
              fontSize="12px"
              fontFamily="inriaRegular"
              color="white"
            >
              Perfil:
            </Text>
            <Text
              fontSize="14px"
              fontFamily="inriaRegular"
              color="teal.300"
            >
              Leitor Assíduo
            </Text>
          </VStack>
        </HStack>
      </Button>

      <HStack>
        <Image
          source={SearchIconImage}
          alt="Ícone de pesquisa"
          resizeMode="contain"
          w="30px"
          h="30px"
          mr="15px"
        />
        <Button
          variant="unstyled"
          px={0}
          py={0}
          onPress={handleNavigateToUserOptions}
        >
          <Image
            source={OptionsIconImage}
            alt="Ícone de opções"
            resizeMode="contain"
            w="30px"
            h="30px"
          />
        </Button>
      </HStack>
    </HStack >
  )
}
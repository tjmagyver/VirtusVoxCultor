import { HStack, Image, Text, VStack } from "native-base";

import OptionsIconImage from '@assets/optionsIcon.png';
import ProfileIconImage from '@assets/profileIcon.png';
import SearchIconImage from '@assets/searchIcon.png';
import VirtusIconInactiveImage from '@assets/virtusIconInactive.png';

export function Header() {
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
            Desativada
          </Text>
        </VStack>
      </HStack>

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

      <HStack>
        <Image
          source={SearchIconImage}
          alt="Ícone de pesquisa"
          resizeMode="contain"
          w="30px"
          h="30px"
          mr="15px"
        />

        <Image
          source={OptionsIconImage}
          alt="Ícone de opções"
          resizeMode="contain"
          w="30px"
          h="30px"
        />
      </HStack>
    </HStack>
  )
}
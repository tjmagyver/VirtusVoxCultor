import {
  Button, HStack, IconButton,
  Image,
  Input, ScrollView,
  SearchIcon,
  Text,
  VStack
} from "native-base";


import PolygonIconImage from '@assets/polygonIcon.png';
import { CardAudioBook } from "@components/CardAudiobook";
import { useState } from "react";
import { FilterBooksModal } from "./FilterBooksModal";


export function YourLibrary() {
  const [isExpandedLibrary, setIsExpandedLibrary] = useState(false);
  const [isTypingSearch, setIsTypingSearch] = useState(false);

  function handleToggleExpandLibrary() {
    setIsExpandedLibrary(!isExpandedLibrary);
  }

  function handleToggleSearchIconButton() {
    setIsTypingSearch(!isTypingSearch);
  }

  return (
    <VStack
      w="100%"
      bg="gray.50"
      ml="6px"
      py="7px"
    >
      <HStack
        px="10px"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <HStack
          alignItems="center"
        >
          <Image
            source={PolygonIconImage}
            alt="Ícone de polígono"
            resizeMode="contain"
            w="32px"
            h="32px"
          />
          <Text
            fontSize="24px"
            fontFamily="inriaBold"
            color="red.900"
            ml="6px"
          >
            Sua biblioteca
          </Text>
        </HStack>
        {
          isExpandedLibrary ?
            <VStack alignItems="center">
              <Button
                variant="link"
                px={0}
                py={0}
                onPress={handleToggleExpandLibrary}
              >
                <Text
                  fontSize="15px"
                  fontFamily="inriaRegular"
                  color="gray.900"
                  mr="6px"
                  mb="8px"
                >
                  {"< Voltar"}
                </Text>
              </Button>
              <HStack>
                <IconButton
                  px={0}
                  py={0}
                  icon={
                    <SearchIcon
                      color="gray.300"
                      size="20px"
                    />
                  }
                  _pressed={{
                    bg: "transparent"
                  }}
                  onPress={handleToggleSearchIconButton}
                />
                <FilterBooksModal 
                  position="absolute"
                  top={111}
                  right="5px"
                />
              </HStack>
            </VStack> :
            <Button
              variant="link"
              px={0}
              py={0}
              onPress={handleToggleExpandLibrary}
            >
              <Text
                fontSize="12px"
                fontFamily="inriaRegular"
                color="gray.300"
                mr="6px"
              >
                ver mais...
              </Text>
            </Button>
        }
      </HStack>
      { isExpandedLibrary &&
        isTypingSearch &&
        <Input
          rounded="30px"
          width="340px"
          h={8}
          ml="12px"
          mt="18px"
          bg="gray.125"
          placeholder="Procurar na minha coleção"
          placeholderTextColor="gray.300"
          fontFamily="inriaLight"
          fontSize="15px"
          borderWidth={0}
          _focus={{
            bg: "gray.125",
            fontFamily: 'inriaRegular',
          }}
          InputRightElement={
            <IconButton
              icon={
                <SearchIcon color="gray.100" />
              }
              _pressed={{
                bg: "gray.125",
              }}
              onPress={handleToggleSearchIconButton}
            />
          }
        />
      }
      <ScrollView
        horizontal={!isExpandedLibrary ? true : false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
      >
        {
          isExpandedLibrary ?
            <VStack mt="10px">
              <HStack>
                <CardAudioBook mr="4px" />
                <CardAudioBook mr="4px" />
                <CardAudioBook />
              </HStack>
              <HStack mt="19px">
                <CardAudioBook mr="4px" />
                <CardAudioBook mr="4px" />
                <CardAudioBook />
              </HStack>
              <HStack mt="19px">
                <CardAudioBook mr="4px" />
                <CardAudioBook mr="4px" />
                <CardAudioBook />
              </HStack>
              <HStack mt="19px">
                <CardAudioBook mr="4px" />
                <CardAudioBook mr="4px" />
                <CardAudioBook />
              </HStack>
              <HStack mt="19px">
                <CardAudioBook mr="4px" />
                <CardAudioBook mr="4px" />
                <CardAudioBook />
              </HStack>
            </VStack> :
            <HStack
              mt="10px"
              pr="20px"
            >
              <CardAudioBook />
              <CardAudioBook />
              <CardAudioBook />
              <CardAudioBook />
            </HStack>
        }
      </ScrollView>
    </VStack>
  )
}
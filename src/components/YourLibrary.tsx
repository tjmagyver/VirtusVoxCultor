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
import { AudiobookData } from "@screens/Home";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { FilterBooksModal } from "./FilterBooksModal";

interface YourLibraryProps {
  audiobooks: AudiobookData[]
}

export function YourLibrary({ audiobooks }: YourLibraryProps) {
  const [isExpandedLibrary, setIsExpandedLibrary] = useState(false);
  const [isTypingSearch, setIsTypingSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState('')

  function handleToggleExpandLibrary() {
    setIsExpandedLibrary(!isExpandedLibrary);
  }

  function handleToggleSearchIconButton() {
    setIsTypingSearch(!isTypingSearch);
  }

  function renderAudioBookRows(audiobooks: any) {
    const rows = [];
    const audiobooksLength = audiobooks.length;

    for (let i = 0; i < audiobooksLength; i += 3) {
      const audioBookRow = (
        <HStack key={i} mb="12px">
          {audiobooks.slice(i, i + 3).map((audiobook: any, index: any, array: any) => (
            <CardAudioBook
              key={index}
              audiobook={audiobook}
              mr={index !== array.length - 1 ? '4px' : '0'}
            />
          ))}
        </HStack>
      );

      rows.push(audioBookRow);
    }

    return rows;
  };

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
            fontSize={RFValue(24)}
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
                  fontSize={RFValue(15)}
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
                fontSize={RFValue(12)}
                fontFamily="inriaRegular"
                color="gray.300"
                mr="6px"
              >
                ver mais...
              </Text>
            </Button>
        }
      </HStack>
      {isExpandedLibrary &&
        isTypingSearch &&
        <Input
          rounded="30px"
          minWidth="340px"
          w="90%"
          h={RFValue(8)}
          ml="12px"
          mt="18px"
          bg="gray.125"
          placeholder="Procurar na minha coleção"
          placeholderTextColor="gray.300"
          fontFamily="inriaLight"
          fontSize={RFValue(15)}
          borderWidth={0}
          _focus={{
            bg: "gray.125",
            fontFamily: 'inriaRegular',
          }}
          value={searchTitle}
          onChangeText={setSearchTitle}
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
              {
                renderAudioBookRows(audiobooks?.filter(audiobook => audiobook?.title?.toLocaleLowerCase().includes(searchTitle?.toLocaleLowerCase())))
              }
            </VStack> :
            <HStack
              mt="10px"
              pr="20px"
            >
              {
                renderAudioBookRows(audiobooks?.filter(audiobook => audiobook?.title?.toLocaleLowerCase().includes(searchTitle?.toLocaleLowerCase())))
              }
            </HStack>
        }
      </ScrollView>
    </VStack>
  )
}
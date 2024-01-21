import BookCoverLgImage from '@assets/bookCoverLg.png';
import EditIconImage from '@assets/editIcon.png';
import PolygonIconImage from '@assets/polygonIcon.png';
import PolygonPlayIconImage from '@assets/polygonPlayIcon.png';
import ReturnToStartIconImage from '@assets/returnToStartIcon.png';
import { Header } from "@components/Header";
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack
} from "native-base";

import { BookNotesModal } from "@components/BookNotesModal";
import { BuyPhysicalBookFooter } from "@components/BuyPhysicalBookFooter";
import { CardChapterName } from "@components/CardChapterName";
import { ErrorReportModal } from "@components/ErrorReportModal";
import { ReadMoreModal } from "@components/ReadMoreModal";
import { useRoute } from "@react-navigation/native";

import { Audio } from 'expo-av';
import { useEffect, useRef, useState } from "react";

export function Player() {
  const route = useRoute<any>();
  const sound = useRef<Audio.Sound | null>(null);
  const [rate, setRate] = useState(1.0)
  const playbackRateRef = useRef(1.0)
  const { audiobook } = route.params;

  console.log(audiobook)

  async function handleAudioPlayPause() {
    const audioURL = 'https://virtus-bucket.s3.us-east-2.amazonaws.com/AWS_BUCKET_NAME/8434d5b7-df69-415e-b476-5ee2c7505c0a-PREF%C3%83%C2%81CIO+(1).wav';

    if (!sound.current) {
      sound.current = new Audio.Sound()
      await sound?.current.loadAsync({ uri: audioURL }, { shouldPlay: true, rate: 2.0 },);
    }

    await sound.current.setPositionAsync(0);
    await sound.current.setRateAsync(playbackRateRef.current, true)
    await sound.current.playAsync();
  }

  const handleChangeRate = async (newRate: number) => {
    try {
      playbackRateRef.current = newRate;
      if (sound.current) {
        await sound.current.setRateAsync(newRate, true);
        setRate(newRate)
      }
    } catch (error) {
      console.error('Erro ao alterar a taxa de reprodução', error);
    }
  };

  useEffect(() => {
    console.log(sound.current)
  }, [])

  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="background"
      pb='12px'
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack px="14px" mt="18px">
          <HStack>
            <Image
              source={BookCoverLgImage}
              alt="Book Cover Large"
              resizeMode="contain"
            />
            <VStack ml="19px">
              <Text
                fontSize="20px"
                fontFamily="inriaRegular"
                color="gray.300"
              >
                Sinópse:
              </Text>
              <Text
                fontSize="12px"
                fontFamily="inriaRegular"
                color="black"
                w="193px"
                lineHeight="15px"
                numberOfLines={8}
              >
                {audiobook.sinopse}
              </Text>
              <HStack
                mt="auto"
                justifyContent="space-between"
                alignItems="center"
              >
                <ReadMoreModal
                  sinopse={audiobook.sinopse}
                  position="absolute"
                  top="114px"
                  left="30px"
                />
                <ErrorReportModal
                  position="absolute"
                  top="78px"
                />
              </HStack>
            </VStack>
          </HStack>

          <VStack
            mt="19px"
            px="14px"
            py="12px"
            bg="gray.75"
          >
            <Text
              fontSize="24px"
              fontFamily="inriaBold"
              color="red.900"
            >
              Capítulo
            </Text>
            <HStack
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="20px"
                fontFamily="inriaRegular"
                color="gray.300"
              >
                Prefácio
              </Text>
              <Image
                source={EditIconImage}
                w="30px"
                h="30px"
                resizeMethod="resize"
                resizeMode="contain"
                alt="Edit Icon"
              />
            </HStack>
            <Box
              w="336px"
              h="54px"
              bg="gray.900"
              justifyContent="flex-start"
              pl="10px"
              mt="12px"
              flexDir="row"
            >
              <Button
                onPress={handleAudioPlayPause}
                variant="unstyled"
                w="41px"
                h="41px"
                rounded="full"
                bg="gray.100"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  source={PolygonPlayIconImage}
                  w="20px"
                  h="20px"
                  alt="Polygon Black Icon"
                  resizeMethod="resize"
                  resizeMode="contain"
                />
                <FontAwesome5 name="pause" size={24} color="gray.900" />
              </Button>
              <Button
                onPress={handleAudioPlayPause}
                variant="unstyled"
                w="41px"
                h="41px"
                rounded="full"
                bg="gray.100"
                alignItems="center"
                justifyContent="center"
              >
                {sound?.current?.getStatusAsync() ? (
                  <FontAwesome5 name="pause" size={24} color="gray.900" />
                ) : (
                  <Image
                    source={PolygonPlayIconImage}
                    w="20px"
                    h="20px"
                    alt="Polygon Black Icon"
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                )}
              </Button>
              <HStack alignItems="flex-end">
                <Button
                  variant="unstyled"
                  onPress={() => handleChangeRate(0.75)}
                >
                  <Text
                    fontFamily={`${rate === 0.75 ? 'inriaBold' : 'inriaRegular'}`}
                    color={`${rate === 0.75 ? 'white' : 'gray.300'}`}
                  >
                    0.75x
                  </Text>
                </Button>
                <Button
                  variant="unstyled"
                  color="white"
                  onPress={() => handleChangeRate(1)}
                >
                  <Text
                    fontFamily={`${rate === 0.75 ? 'inriaBold' : 'inriaRegular'}`}
                    color={`${rate === 1 ? 'white' : 'gray.300'}`}
                  >
                    1x
                  </Text>
                </Button>
                <Button
                  variant="unstyled"
                  onPress={() => handleChangeRate(1.25)}
                >
                  <Text
                    fontFamily="inriaRegular"
                    color={`${rate === 1.25 ? 'white' : 'gray.300'}`}
                  >
                    1.25x
                  </Text>
                </Button>
                <Button
                  variant="unstyled"
                  onPress={() => handleChangeRate(1.5)}
                >
                  <Text
                    fontFamily={`${rate === 0.75 ? 'inriaBold' : 'inriaRegular'}`}
                    color={`${rate === 1.25 ? 'white' : 'gray.300'}`}
                  >
                    1.5x
                  </Text>
                </Button>
              </HStack>
            </Box>
            <HStack
              mt={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <BookNotesModal
                position="absolute"
                top="115px"
              />
              <Button
                variant="unstyled"
                px={0}
                py={0}
              >
                <Image
                  source={ReturnToStartIconImage}
                  w="20px"
                  h="17px"
                  resizeMethod="resize"
                  resizeMode="contain"
                  alt="Voltar ao inicio"
                />
              </Button>
            </HStack>
          </VStack>

        </VStack>
        <VStack
          w="366px"
          maxHeight="225px"
          overflow="hidden"
          pt="18px"
          pl="24px"
          mb="21px"
        >
          <Text
            fontFamily="inriaRegular"
            fontSize="24px"
            color="red.900"
          >
            Sumário
          </Text>
          <HStack>
            <ScrollView>
              <VStack>
                <VStack
                  right={9}
                  mt="35px"
                  position="absolute"
                >
                  <Image
                    source={PolygonIconImage}
                    alt="Polygon Icon"
                    resizeMethod="resize"
                    resizeMode="contain"
                    style={{
                      transform: [{ rotate: '270deg' }]
                    }}
                  />
                  <Image
                    mt="10px"
                    source={PolygonIconImage}
                    alt="Polygon Icon"
                    resizeMethod="resize"
                    resizeMode="contain"
                    style={{
                      transform: [{ rotate: '90deg' }]
                    }}
                  />
                </VStack>
                <CardChapterName chapterName="Prefácio" />
                {audiobook?.chapters?.map(() => (
                  <CardChapterName
                    isCurrentChapter
                    chapterName="Capítulo 1 - Aqui o texto livro começa de fato"
                  />
                ))}
                {/* <CardChapterName
                  isCurrentChapter
                  chapterName="Capítulo 1 - Aqui o texto livro começa de fato"
                />
                <CardChapterName
                  chapterName="Capítulo 2 - Fonte deve ser pequena"
                />
                <CardChapterName
                  chapterName="Capítulo 3 - Reticências para títulos longos"
                />
                <CardChapterName
                  chapterName="Capítulo 4 - Reticências para títulos longos"
                />
                <CardChapterName
                  chapterName="Capítulo 5 - Reticências para títulos longos"
                /> */}
              </VStack>
            </ScrollView>
          </HStack>
        </VStack>
      </ScrollView >
      <BuyPhysicalBookFooter />
    </VStack >
  )
}
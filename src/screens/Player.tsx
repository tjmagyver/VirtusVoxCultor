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
  Pressable,
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import React, { useRef, useState } from "react";
import { RFValue } from 'react-native-responsive-fontsize';

export function Player() {
  const route = useRoute<any>();
  const sound = useRef<Audio.Sound | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [rate, setRate] = useState(1.0)
  const playbackRateRef = useRef(1.0)
  const { audiobook } = route.params;
  const [fileCurrent, setFileCurrent] = useState({
    titleChapter: audiobook?.chapters[0]?.title ?? '',
    fileUrl: audiobook?.chapters[0]?.file ?? ''
  })

  async function handleAudioPlayPause() {
    setIsPlayingAudio(!isPlayingAudio)
    const fileUrl = fileCurrent.fileUrl;

    if (sound) {
      const status = await sound?.current?.getStatusAsync();

      if (status?.isLoaded) {

        if (status?.isPlaying) {
          await sound?.current?.pauseAsync();
          await AsyncStorage.setItem('audioPosition', String(status.positionMillis / 1000));
          setIsPlayingAudio(false)
        } else {
          const storedPosition = await AsyncStorage.getItem('audioPosition');
          if (storedPosition !== null) {
            await sound?.current?.setPositionAsync(Number(storedPosition?.replace('.', '')));

            await sound?.current?.setRateAsync(playbackRateRef.current, true);
            await sound?.current?.playAsync();
            setIsPlayingAudio(true)
          }
        }
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: fileUrl },
          { shouldPlay: true }
        );

        sound.current = newSound;

        setIsPlayingAudio(true)

        // newSound.setOnPlaybackStatusUpdate(async (status: any) => {
        //   if (status?.isPlaying) {
        //     await AsyncStorage.setItem('audioPosition', String(status.positionMillis / 1000));
        //   }
        // });

        await newSound.setRateAsync(playbackRateRef.current, true);
        await newSound.playAsync();
      }
    }
  }

  const handleResetPosition = async () => {
    await sound?.current?.setPositionAsync(0);
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
              source={{ uri: audiobook?.cover }}
              w={145}
              h={213}
              alt="Book Cover Large"
              resizeMode="contain"
              resizeMethod='resize'
            />
            <VStack ml="19px">
              <Text
                fontSize={RFValue(20)}
                fontFamily="inriaRegular"
                color="gray.300"
              >
                Sinópse:
              </Text>
              <Text
                fontSize={RFValue(12)}
                fontFamily="inriaRegular"
                color="black"
                w={RFValue(193)}
                lineHeight={RFValue(15)}
                numberOfLines={6}
              >
                {audiobook?.sinopse}
              </Text>
              <HStack
                mt="auto"
                justifyContent="space-between"
                alignItems="center"
              >
                <ReadMoreModal
                  sinopse={audiobook?.sinopse}
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
              fontSize={RFValue(24)}
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
                fontSize={RFValue(20)}
                fontFamily="inriaRegular"
                color="gray.300"
              >
                {fileCurrent.titleChapter}
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
              w="100%"
              h="54px"
              bg="gray.900"
              justifyContent="flex-start"
              pl="10px"
              mt="12px"
              flexDir="row"
              alignItems="center"
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
                {isPlayingAudio ? (
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
              <HStack alignItems="flex-end" mt="auto">
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
                    fontFamily={`${rate === 1 ? 'inriaBold' : 'inriaRegular'}`}
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
                    fontFamily={`${rate === 1.25 ? 'inriaBold' : 'inriaRegular'}`}
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
                    fontFamily={`${rate === 1.5 ? 'inriaBold' : 'inriaRegular'}`}
                    color={`${rate === 1.5 ? 'white' : 'gray.300'}`}
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
                onPress={handleResetPosition}
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
          w={"97%"}
          maxHeight="225px"
          overflow="hidden"
          pt="18px"
          pl="24px"
          mb="21px"
        >
          <Text
            fontFamily="inriaRegular"
            fontSize={RFValue(24)}
            color="red.900"
          >
            Sumário
          </Text>
          <HStack w="100%">
            <ScrollView maxH="225px" nestedScrollEnabled showsVerticalScrollIndicator={false}>
              <VStack>
                {audiobook?.chapters?.map((chapter: any) => (
                  <Pressable key={chapter.id} onPress={() => {
                    setFileCurrent({
                      fileUrl: chapter.file,
                      titleChapter: chapter.title
                    })
                    setIsPlayingAudio(false)
                  }} >
                    <CardChapterName
                      isCurrentChapter={chapter.file === fileCurrent.fileUrl}
                      chapterName={chapter.title}
                    />
                  </Pressable>
                ))}
              </VStack>
            </ScrollView>

            <VStack
              mt="35px"
              mr="24px"
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
          </HStack>
        </VStack>
      </ScrollView >
      <BuyPhysicalBookFooter linkPurchase={'https://cultordelivros.com.br/'} />
    </VStack >
  )
}
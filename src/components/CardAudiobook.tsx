import { useNavigation } from "@react-navigation/native";
import { AudiobookData } from "@screens/Home";
import { Box, Button as ButtonNativeBase, IButtonProps, Image } from "native-base";
import React from "react";
import reactotron from "reactotron-react-native";

interface CardAudioBookProps extends IButtonProps {
  audiobook?: AudiobookData
}

import BookCoverImage from '@assets/bookCover.png';

export function CardAudioBook({ audiobook, ...rest }: CardAudioBookProps) {
  const navigation = useNavigation<any>()

  reactotron.log(audiobook)

  function handleNavigatePlayer() {
    navigation.navigate('Player', { audiobook })
  }
  return (
    <>
      {
        audiobook ?
          <Box
            h="155px"
            w="106px"
            ml="10px"
            position="relative"
          >
            <ButtonNativeBase w="100%" h="100%" onPress={handleNavigatePlayer} {...rest} variant="link" position="absolute" top={0} zIndex={100} />
            <Image w="100%" h="100%" source={BookCoverImage} alt="Cover audiobook" resizeMode="contain" position="absolute" top={0} zIndex={0} rounded="4px" />
          </Box> :
          <ButtonNativeBase
            onPress={handleNavigatePlayer}
            {...rest}
            h="155px"
            w="106px"
            bg="black"
            opacity={0.2}
            ml="10px"
          />

      }


    </>
  )
}
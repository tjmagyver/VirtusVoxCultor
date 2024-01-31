import { HStack, IBoxProps, ScrollView, Text, VStack } from "native-base";


import { AudiobookData } from "@screens/Home";
import { RFValue } from "react-native-responsive-fontsize";
import reactotron from "reactotron-react-native";
import { CardAudioBook } from "./CardAudiobook";

interface AudiobookListProps extends IBoxProps {
  audiobooks: AudiobookData[]
  title: string;
  legend: string;
}

export function AudiobookList({
  audiobooks,
  title,
  legend,
  ...rest
}: AudiobookListProps) {
  reactotron.log(audiobooks)
  return (
    <VStack
      w="100%"
      bg="gray.50"
      py="7px"
      pl="6px"
      {...rest}
    >
      <VStack
        px="10px"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Text
          fontSize={RFValue(24)}
          fontFamily="inriaBold"
          color="red.900"
        >
          {title}
        </Text>

        <HStack
          alignItems="center"
          w="100%"
        >
          <Text
            fontSize={RFValue(10)}
            fontFamily="inriaRegular"
            fontStyle="italic"
            color="gray.300"
          >
            {legend}
          </Text>

          <Text
            fontSize={RFValue(12)}
            fontFamily="inriaRegular"
            color="gray.300"
            ml="auto"
          >
            ver mais...
          </Text>
        </HStack>
      </VStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HStack
          mt="10px"
          pr="15px"
        >
          {/* {
            audiobooks &&
            audiobooks.map((audiobook: any) => {
              <CardAudioBook audiobook={audiobook} />
            })
          } */}
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
        </HStack>
      </ScrollView>
    </VStack>
  )
}
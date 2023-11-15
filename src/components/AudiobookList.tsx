import { HStack, IBoxProps, ScrollView, Text, VStack } from "native-base";


import { CardAudioBook } from "@components/CardAudiobook";

interface AudiobookListProps extends IBoxProps {
  title: string;
  legend: string;
}



export function AudiobookList({
  title,
  legend,
  ...rest
}: AudiobookListProps) {
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
          fontSize="24px"
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
            fontSize="10px"
            fontFamily="inriaRegular"
            fontStyle="italic"
            color="gray.300"
          >
            {legend}
          </Text>

          <Text
            fontSize="12px"
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
        <HStack mt="10px">
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
        </HStack>
      </ScrollView>
    </VStack>
  )
}
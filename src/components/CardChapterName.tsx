import { Box, Text } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";

interface CardChapterNameProps {
  chapterName: string;
  isCurrentChapter?: boolean;
}

export function CardChapterName({
  chapterName,
  isCurrentChapter = false
}: CardChapterNameProps) {
  return (
    <Box
      justifyContent="center"
      w={RFValue(271)}
      h={RFValue(42)}
      rounded="10px"
      mb="6px"
      px="19px"
      bg={isCurrentChapter ? "white" : "gray.175"}
      borderWidth={isCurrentChapter ? 0 : 1}
      borderColor="rgba(134, 132, 132, 0.10)"
    >
      <Text
        fontFamily="inriaRegular"
        fontSize={RFValue(12)}
        color={isCurrentChapter ? "gray.900" : "gray.300"}
        noOfLines={1}
        ellipsizeMode="tail"
      >
        {chapterName}
      </Text>
    </Box>
  )
}
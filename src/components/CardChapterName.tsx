import { Box, Text } from "native-base";

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
      w="271px"
      h="42px"
      rounded="10px"
      mb="6px"
      px="19px"
      bg={isCurrentChapter ? "white" : "gray.175"}
      borderWidth={isCurrentChapter ? 0 : 1}
      borderColor="rgba(134, 132, 132, 0.10)"
    >
      <Text
        fontFamily="inriaRegular"
        fontSize="12px"
        color={isCurrentChapter ? "gray.900" : "gray.300"}
      >
        {chapterName}
      </Text>
    </Box>
  )
}
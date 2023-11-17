import { Box, IBoxProps } from "native-base";
import React from "react";

interface CardAudioBookProps extends IBoxProps {}

export function CardAudioBook({ ...rest }: CardAudioBookProps) {
  return (
    <Box
      {...rest}
      h="155px"
      w="106px"
      bg="black"
      opacity={0.2}
      ml="10px"
    />
  )
}
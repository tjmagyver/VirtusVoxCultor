import { Center, ICenterProps, Text } from "native-base";

interface CardFilterNameProps extends ICenterProps {
  filterName: string;
  isActiveFilter?: boolean;
}

export function CardFilterName({ 
  filterName,
  isActiveFilter = false,
  ...rest
}: CardFilterNameProps) {
  return (
    <Center
      {...rest}
      w="118px"
      h="27px"
      rounded="5px"
      bg="gray.100"
      opacity={isActiveFilter ? 1 : 0.5}
    >
      <Text
        fontFamily="inriaRegular"
        fontSize="12px"
        color="gray.900"
      >
        {filterName}
      </Text>
    </Center>
  )
}
import { Center, ICenterProps, Text } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";

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
        fontSize={RFValue(12)}
        color="gray.900"
      >
        {filterName}
      </Text>
    </Center>
  )
}
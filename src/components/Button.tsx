import { Button as ButtonNativeBase, IButtonProps } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends IButtonProps {
  title: string;
  fontSize?: number;
  fontFamily?: string;
  rounded?: number;
  isLoading?: boolean;
}

export function Button({
  title,
  fontSize = 25,
  fontFamily = "jostRegular",
  rounded = 10,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonNativeBase
      {...rest}
      _text={{
        fontSize: `${RFValue(fontSize)}`,
        fontFamily: `${fontFamily}`
      }}
      _pressed={{
        bg: "red.900",
        opacity: 0.9
      }}
      bg="red.900"
      borderRadius={rounded}
      py={0}
      h="fit-content"
    >{isLoading ? <ActivityIndicator size="large" color="white" /> : title}</ButtonNativeBase>
  )
}
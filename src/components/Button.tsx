import { Button as ButtonNativeBase, IButtonProps } from 'native-base';
import { ActivityIndicator } from 'react-native';

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
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`
      }}
      _pressed={{
        bg: "red.900",
        opacity: 0.9
      }}
      bg="red.900"
      borderRadius={rounded}
      py={0}
    >{isLoading ? <ActivityIndicator size="large" color="white" /> : title}</ButtonNativeBase>
  )
}
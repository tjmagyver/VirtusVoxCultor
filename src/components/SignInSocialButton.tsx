import { Button, IButtonProps } from "native-base";
import { ReactElement } from "react";
import { RFValue } from "react-native-responsive-fontsize";

interface SignInSocialButtonProps extends IButtonProps {
  bg?: string;
  borderColor?: string;
  title: string;
  textColor: string;
  icon: ReactElement
}

export function SignInSocialButton({
  bg,
  borderColor = bg,
  title,
  textColor,
  icon,
  ...rest
}: SignInSocialButtonProps) {
  return (
    <Button
      {...rest}
      bg={bg}
      h={10}
      w="257px"
      rounded={30}
      _text={{
        color: `${textColor}`,
        fontFamily: 'inriaRegular',
        fontSize: `${RFValue(16)}`,
      }}
      _pressed={{
        bg: `${bg}`,
        opacity: 0.9,
      }}
      borderWidth={1}
      py={0}
      leftIcon={icon}
      borderColor={borderColor}
    >
      {title}
    </Button>
  )
}
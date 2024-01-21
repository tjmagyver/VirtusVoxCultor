import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Checkout } from "@screens/Checkout"
import { Home } from "@screens/Home"
import { Plans } from "@screens/Plans"
import { Player } from "@screens/Player"
import { UserOptions } from "@screens/UserOptions"
import { UserProfile } from "@screens/UserProfile"

export type AppStackParamList = {
  Home: undefined
  Player: undefined
  UserOptions: undefined
  UserProfile: undefined
  Plans: undefined
  Checkout: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Player" component={Player} />
      <Screen name="UserOptions" component={UserOptions} />
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="Plans" component={Plans} />
      <Screen name="Checkout" component={Checkout} />
    </Navigator>
  )
}
import { NavigationContainer } from "@react-navigation/native"
import React from 'react'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

import { useAuth } from '../hooks/auth'

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer independent={true}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
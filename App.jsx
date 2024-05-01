import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'minimum of 4 characters required')
  .max(16, 'maximum of 16 characters required')
  .required('Length is required!')
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
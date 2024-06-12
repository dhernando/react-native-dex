import React from 'react'
import { StateProvider } from '@/context/store'
import { Slot } from 'expo-router';

const Layout = () => {
    return (
			<StateProvider>
        <Slot />
      </StateProvider>
    )
}

export default Layout;
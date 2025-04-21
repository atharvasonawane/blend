import React from 'react';
import {View, Text, ImageBackground,Image} from 'react-native';
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const TabIcon = () => {
    return(

        <ImageBackground
            source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[112] min-h-14 justify-center items-center rounded-full overflow-hidden "
        >
            <Image source={icons.home} tintColor="#151312" className="size-5"  />

            <Text className="ml-2 font-semibold">Home</Text>

        </ImageBackground>
    )
}

const _Layout = () => {
  return (

      <Tabs>
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Home',
                  headerShown: false,
                  tabBarIcon: ({focused}) => (

                      <TabIcon/>
                  )
              }}/>

          <Tabs.Screen
              name="search"
              options={{
                  title: 'Search',
                  headerShown: false,
                  tabBarIcon: ({focused}) => (
                      <TabIcon/>
                  )
              }}/>

          <Tabs.Screen
              name="profile"
              options={{
                  title: 'Profile',
                  headerShown: false,
                  tabBarIcon: ({focused}) => (
                      <TabIcon/>
                  )
              }}/>

          <Tabs.Screen
              name="saved"
              options={{
                  title: 'Saved',
                  headerShown: false,
                  tabBarIcon: ({focused}) => (
                      <TabIcon/>
                  )
              }}/>

      </Tabs>
  );
}

export default _Layout
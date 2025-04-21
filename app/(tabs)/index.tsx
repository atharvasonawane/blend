import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center"}
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Text className={"text-5xl text-primary font-bold"}>Welcome!</Text>

    </View>
  );
}
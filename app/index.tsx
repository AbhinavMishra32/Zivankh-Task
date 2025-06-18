import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row h-20 items-center justify-between pl-7">
          <Image
            source={require('@/assets/images/Group 8.png')}
            style={{ width: 60, height: 60, marginTop: 14 }}
            // resizeMode="contain"
            />
        <View className="w-[60%] h-full items-center justify-end flex flex-row gap-3 pr-3">
          <TouchableOpacity onPress={() => console.log("Frame 6 pressed")}>
            <Image
              source={require('@/assets/images/Frame 6.png')}
              style={{ width: 120, height: 70 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity 
            className="h-9 w-20 bg-[rgb(170_220_228)] rounded-md border-[1px] border-gray-400 flex flex-row gap-1 items-center justify-center"
            onPress={() => console.log("Back pressed")}
          >
            <Ionicons name="chevron-back" size={16} color="white" />
            <Text className="text-white">Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-full flex justify-center items-center">
        <Text>sfsdafasdfdsafdsaf</Text>
        <Text>sfsdafasdfdsafdsaf</Text>
        <Text>sfsdafasdfdsafdsaf</Text>
      </View>
    </SafeAreaView>
  );
}

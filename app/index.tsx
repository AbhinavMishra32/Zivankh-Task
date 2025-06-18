import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const backgroundOpacity = useRef(new Animated.Value(1)).current;
  
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  
  const finalX = -(screenWidth / 2) + 55;
  const finalY = -(screenHeight / 2) + 87;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.spring(logoScale, {
            toValue: 1.2,
            tension: 100,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(1200),
        Animated.parallel([
          Animated.spring(logoScale, {
            toValue: 0.70,
            tension: 40,
            friction: 10,
            useNativeDriver: true,
          }),
          Animated.timing(logoPosition, {
            toValue: { x: finalX, y: finalY },
            duration: 1200,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: true,
          }),
          Animated.timing(backgroundOpacity, {
            toValue: 0,
            duration: 1000,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.delay(300),
            Animated.timing(contentOpacity, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ]).start(() => {
        setShowSplash(false);
      });
    };

    startAnimation();
  }, []);

  if (showSplash) {
    return (
      <LinearGradient
        colors={['#f2fefe', '#ffffff', '#e3f6fb']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.6 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#f8fffe',
              opacity: backgroundOpacity,
              zIndex: 1,
            }}
          />
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
              style={{
                transform: [
                  { translateX: logoPosition.x },
                  { translateY: logoPosition.y },
                  { scale: logoScale },
                ],
                opacity: logoOpacity,
                zIndex: 2,
              }}
            >
              <Image
                source={require('@/assets/images/Group 8.png')}
                style={{ width: 110, height: 110 }}
                resizeMode="contain"
              />
            </Animated.View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#f2fefe', '#ffffff', '#e3f6fb']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.6 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1, opacity: contentOpacity }}>
          <View className="flex flex-row h-20 items-center justify-between pl-7">
          <Image
            source={require('@/assets/images/Group 8.png')}
            style={{ width: 60, height: 60, marginTop: 14 }}
          // resizeMode="contain"
          />
          <View className="w-[60%] h-full items-center justify-end flex flex-row gap-5 pr-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
              style={{ transform: [{ scale: 1 }] }}
            >
              <Image
                source={require('@/assets/images/Frame 6.png')}
                style={{ width: 120, height: 70 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                console.log("Back pressed");
              }}
              className="h-9 w-20 bg-[rgb(170_220_228)] rounded-md border-[1px] border-gray-400 flex flex-row gap-1 items-center justify-center"
            >
              <Ionicons name="chevron-back" size={16} color="white" />
              <Text className="text-white">Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-[400px] flex justify-center items-center px-8">
          <Text className="text-center">Hi, Abc patient, Let's get started — I'm here to listen and help you feel better!</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
          >
            <Image
              source={require('@/assets/images/Frame 4.png')}
              style={{ width: 330, height: 80, marginTop: 22 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
          >
            <Image
              source={require('@/assets/images/Frame 5.png')}
              style={{ width: 300, height: 50, marginTop: 2 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          alignItems: 'center',
          marginBottom: -50
        }}>
          <Image
            source={require('@/assets/images/image 6.png')}
            style={{ width: 400, height: 430 }}
          />
        </View>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

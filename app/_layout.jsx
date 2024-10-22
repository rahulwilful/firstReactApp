import { useFonts } from "expo-font";
import { Stack } from "expo-router";

    export default function RootLayout(){
        useFonts({
            "armReg":require('./../assets/fonts/Arima-Regular.ttf'),
            "armMed":require('./../assets/fonts/Arima-Medium.ttf'),
            "armBold":require('./../assets/fonts/Arima-Bold.ttf')
        })
        return(
            <Stack screenOptions={{
                headerShown:false
            }}>
              
                <Stack.Screen name="(tabs)" />
            </Stack>
        );
    }
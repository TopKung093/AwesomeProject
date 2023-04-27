import React from "react";
import { ScrollView, Text, View, TextInput, Button, Image } from "react-native";
import Cover from "../screen/Backgroud";
import HomeIconMenu from "../screen/Homepage";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Cover />
                <HomeIconMenu />
            </View>
        </ScrollView>

    );
}
import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from "./src/Header";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const [isOpened, setIsOpened] = useState(true)
    const [selectedTabIdx, setSelectedTabIdx] = useState(0)

    const onPressArrow = () => { setIsOpened(!isOpened) }

    const ItemSeparatorComponent = () => <Margin height={ 13 }/>
    const renderItem = ({ item }) => (
        <View>
            <Profile
                uri={ item.uri }
                name={ item.name }
                introduction={ item.introduction }
            />
        </View>
    )

    const ListHeaderComponent = () => (
        <View style={{ backgroundColor: "white" }}>
            <Header />
            <Margin height={ 10 }/>
            <Profile
                uri={ myProfile.uri }
                name={ myProfile.name }
                introduction={ myProfile.introduction }
                isMe={ true }
            />
            <Margin height={ 15 }/>
            <Division />
            <Margin height={ 12 }/>
            <FriendSection
                friendProfilesLength={ friendProfiles.length }
                onPressArrow={ onPressArrow }
                isOpened={ isOpened }
            />
            <Margin height={ 5 }/>
        </View>
    )

    const ListFooterComponent = () => (<Margin height={ 10 }/>)

    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={ styles.container }
                edges={['top', 'right', 'left']} // 예외없이 모두 안전영역 적용
            >
                <FlatList
                    showsVerticalScrollIndicator={ false }
                    data={ isOpened ? friendProfiles : [] }
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    keyExtractor={ (_, index) => index }
                    stickyHeaderIndices={ [0] }
                    ItemSeparatorComponent={ ItemSeparatorComponent }
                    renderItem={ renderItem }
                    ListHeaderComponent={ ListHeaderComponent }
                    ListFooterComponent={ ListFooterComponent }
                />
                <TabBar
                    selectedTabIdx={ selectedTabIdx }
                    setSelectedTabIdx={ setSelectedTabIdx }
                />
            </SafeAreaView>
            <StatusBar style="dark" />
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
  },
});

import {TouchableOpacity, View} from "react-native";
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const TabButton = (props) => {
    const {
        isSelected,
        onPress,
        activeIconName,
        inactiveIconName,
        isIconFontisto,
        isIconIonicons
    } = props
    return (
        <TouchableOpacity
            activeOpacity={ 1 }
            onPress={onPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 10 }}
        >
            { isIconFontisto && <Fontisto name={ isSelected ? activeIconName : inactiveIconName } size={24} color="black"/> }
            { isIconIonicons && <Ionicons name={ isSelected ? activeIconName : inactiveIconName } size={24} color="black"/> }
        </TouchableOpacity>
    )
}
export default (props) => {
    const { selectedTabIdx, setSelectedTabIdx } = props
    const safeAreaInsets = useSafeAreaInsets()

    return (
        <View style={
            {
                width: "100%",
                flexDirection: "row",
                paddingBottom: safeAreaInsets.bottom,
                borderTopWidth: 0.2,
                borderTopColor: "lightgrey"
            }
        }>
            <TabButton
                isSelected={ selectedTabIdx === 0 }
                onPress={ () => setSelectedTabIdx(0) }
                activeIconName={ "person" }
                inactiveIconName={ "persons" }
                isIconFontisto
            />
            <TabButton
                isSelected={ selectedTabIdx === 1 }
                onPress={ () => setSelectedTabIdx(1) }
                activeIconName={ "chatbubble" }
                inactiveIconName={ "chatbubble-outline" }
                isIconIonicons
            />
            <TabButton
                isSelected={ selectedTabIdx === 2 }
                onPress={ () => setSelectedTabIdx(2) }
                activeIconName={ "pricetag" }
                inactiveIconName={ "pricetag-outline" }
                isIconIonicons
            />
            <TabButton
                isSelected={ selectedTabIdx === 3 }
                onPress={ () => setSelectedTabIdx(3) }
                activeIconName={ "add-circle" }
                inactiveIconName={ "add-circle-outline" }
                isIconIonicons
            />
        </View>
    )
}
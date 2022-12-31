import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';



const IconButton = (props) => {
    const { iconName, bgColor } = props
    return (
        <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={ styles.headerIcon }>
            <Ionicons name={ iconName } size={ 24 } color="black" />
        </TouchableOpacity>
    )
}
export default () => {
    return (
        <View style={ styles.headerContainer }>
            <Text style={ styles.title }>친구</Text>
            <View style={ styles.headerIconContainer }>
                <IconButton iconName="search-outline" />
                <IconButton iconName="person-add-outline" />
                <IconButton iconName="md-musical-notes-outline" />
                <IconButton iconName="ios-settings-outline" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    headerIconContainer: {
        flexDirection: "row"
    },
    headerIcon: {
        paddingHorizontal: 6
    }
});
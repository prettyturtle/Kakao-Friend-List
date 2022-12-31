import { Image, StyleSheet, Text, View } from "react-native";
import Margin from "./Margin";

export default (props) => {
    const style = styles(props)
    return (
        <View style={ style.profileContainer }>
            <Image
                source={
                    {
                        uri: props.uri
                    }
                }
                style={ style.profileImage }
            />
            <View style={ style.textContainer }>
                <Text style={ style.name }>{ props.name }</Text>

                {
                    props.introduction ? (
                        <View>
                            <Margin height={  props.isMe ? 6 : 2 } />
                            <Text style={style.introduction}>{props.introduction}</Text>
                        </View>
                    ) : null
                }
            </View>
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    profileContainer: {
        flexDirection: "row"
    },
    profileImage: {
        width: props.isMe ? 60 : 50,
        height: props.isMe ? 60 : 50,
        borderRadius: 20
    },
    textContainer: {
        justifyContent: "center",
        marginLeft: 10
    },
    name: {
        fontSize: props.isMe ? 16 : 15,
        fontWeight: props.isMe ? "bold" : "normal"
    },
    introduction: {
        fontSize: props.isMe ? 12 : 11,
        fontWeight: "normal",
        color: "grey"
    }
})
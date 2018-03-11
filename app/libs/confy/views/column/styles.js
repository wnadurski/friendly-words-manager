import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    columnsContainer: {
        flex: 1,
        flexDirection: "row"
    },
    columnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    column: {
        width:300,
        padding: 10,
    },
    oddColumn: {
        backgroundColor: "#d4d4d4"
    }
})
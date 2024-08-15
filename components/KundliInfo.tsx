import { StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Fragment } from "react";

interface RowData {
    title: string;
    content: string;
}
interface KundliDescriptionProps {
    data: RowData[];
}
const KundliInfo: React.FC<KundliDescriptionProps> = ({ data }) => {
    return (
        <Fragment>
            {data?.map((row, index) => (
                <BlurView key={index} intensity={1} style={styles.container}>
                    <Text style={styles.title}>{row.title}</Text>
                    <Text style={styles.content}>{row.content}</Text>
                </BlurView>
            ))}
        </Fragment>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15,
        borderRadius: 16,
        marginBottom: 30, 
    },
    title: {
        color: 'white',
        fontSize: 14,
        marginBottom:5
    },
    content: {
        color: 'white', 
        fontSize: 11, 
        lineHeight: 22
    },
});

export default KundliInfo;
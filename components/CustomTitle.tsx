import { Text, StyleSheet } from 'react-native';

interface CustomTitleProps {
    title: string;
}
const CustomTitle: React.FC<CustomTitleProps> = ({ title }) => {
    return (
        <Text style={styles.heading}>{title}</Text>
    );
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 17,
        color: '#FFF',
            marginTop: 20,
            marginBottom: 15,
        fontWeight: 'bold',
    },
});

export default CustomTitle
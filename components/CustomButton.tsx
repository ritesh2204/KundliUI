import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
    title: string;
    isActive: boolean;
    onPress: () => void;
    style?: ViewStyle; 
}
const CustomButton: React.FC<CustomButtonProps> = ({ title, isActive, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 14,
        borderRadius: 50,
        alignItems: 'center',
    } as ViewStyle,
    activeButton: {
        backgroundColor: 'rgba(254, 182, 64, .6)',
    } as ViewStyle,
    inactiveButton: {
        borderWidth: 1,
        borderColor: 'white',
    } as ViewStyle,
    buttonText: {
        color: 'white',
        fontSize: 12,
    } as TextStyle,
});

export default CustomButton;
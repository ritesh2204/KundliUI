import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';

const ImageView = () => {
    const { width } = Dimensions.get('window');
    const imageWidth = width;
    const imageHeight = (imageWidth * 9) / 16;
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/kundli.png')}
                style={[styles.image, { width: imageWidth, height: imageHeight }]}
                resizeMode="contain"
            />
            <Text style={[styles.number, { top: imageHeight * 0.1, left: imageWidth * 0.30 }]}>8</Text>
            <Text style={[styles.number, { top: imageHeight * 0.1, right: imageWidth * 0.30 }]}>6</Text>
            <Text style={[styles.number, { bottom: imageHeight * 0.05, left: imageWidth * 0.34 }]}>12</Text>
            <Text style={[styles.number, { bottom: imageHeight * 0.05, right: imageWidth * 0.35 }]}>2</Text>
            <Text style={[styles.number, { top: imageHeight * 0.35, left: imageWidth * 0.42 }]}>7</Text>
            <Text style={[styles.number, { top: imageHeight * 0.45, left: imageWidth * 0.32 }]}>10</Text>
            <Text style={[styles.number, { top: imageHeight * 0.35, left: imageWidth * 0.07 }]}>9</Text>
            <Text style={[styles.number, { top: imageHeight * 0.55, left: imageWidth * 0.42 }]}>11</Text>
            <Text style={[styles.number, { top: imageHeight * 0.55, left: imageWidth * 0.07 }]}>11</Text>
            <Text style={[styles.number, { top: imageHeight * 0.45, right: imageWidth * 0.35 }]}>4</Text>
            <Text style={[styles.number, { top: imageHeight * 0.38, right: imageWidth * 0.08 }]}>5</Text>
            <Text style={[styles.number, { top: imageHeight * 0.55, right: imageWidth * 0.08 }]}>3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',  
    },
    image: {
        position: 'relative',
    },
    number: {
        position: 'absolute',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ImageView;
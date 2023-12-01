// RegisterScreenCSS.tsx
import { StyleSheet } from 'react-native';

//css
const registerScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        height: 100,
        borderColor: 'white',
        marginBottom: 10,
        padding: 6,
        left:80,
        bottom: 80,
        color: 'white',
        borderRadius: 20,
        fontSize: 80
        
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 8,
        color: 'white',
        borderRadius: 20,
    },
    button: {
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },

    logoImage: {
        alignSelf: 'center',
        marginBottom: 20,      // Espacio inferior
    },
});

export default registerScreenStyles;

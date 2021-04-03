import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, Text, StatusBar, Platform } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function Swiper(props) {
    const handleClick = (e, item) => {
        const { swipeBottom, swipeTop } = props
        if (e.nativeEvent.contentOffset.y < 0) {
            swipeBottom(item)
        } else {
            swipeTop(item)
        }
    }
    const { images, textSize, textColor, textBold, textUnderline, imageHeight } = props

    return (
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
            {images &&
                images.map((item, index) => {
                    return (typeof item.secure_url === 'string' && typeof item.filename === 'string' ?
                        <ScrollView key={index} onScrollEndDrag={(e) => handleClick(e, item)}>
                            <Image
                                style={{
                                    height: screenWidth, width: screenWidth, borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    borderBottomRightRadius: 30,
                                    borderBottomLeftRadius: 30,
                                }}
                                source={{ uri: item.secure_url }}

                            />
                            <View style={styles.imageText}>
                                <Text style={[
                                    typeof textSize === 'number' && textSize > 0 && textSize <= 40 ? { fontSize: textSize } : { fontSize: 30 },
                                    typeof textBold === 'boolean' && textBold && { fontWeight: 'bold' },
                                    typeof textColor === 'string' && { color: textColor },
                                    typeof textUnderline === 'boolean' && textUnderline && { textDecorationLine: 'underline' }
                                ]}>
                                    {item.filename && item.filename}
                                </Text>
                            </View>
                        </ScrollView>
                        :
                        null
                    )
                })
            }
        </ScrollView>
    );
}

export default Swiper;

const styles = StyleSheet.create({
    imageText: {
        position: 'absolute',
        bottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});

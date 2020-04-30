import React, { useRef, useCallback } from "react";
import { View, TouchableOpacity, Dimensions, Image } from "react-native";
import { AntDesign } from "expo-vector-icons";
import CarouselSlide from "react-native-snap-carousel";
import styles from "./styles";

export default function Carousel({ galery }) {
  const carouselRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  }, [carouselRef]);

  const handleNext = useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  }, [carouselRef]);

  const renderItem = url => {
    const item = Array.from(url.item);
    item.splice(4, 0, "s");
    const uri = item.join("");

    return (
      <>
        <View style={styles.opacity} />
        <Image source={{ uri }} style={{ height: 300, width: "100%" }} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.LeftArrow} onPress={handlePrev}>
        <AntDesign name="left" color="#fff" size={30} />
      </TouchableOpacity>

      <CarouselSlide
        loop={true}
        ref={carouselRef}
        data={galery}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        layout="default"
        slideStyle={styles.slide}
      />

      <TouchableOpacity style={styles.RightArrow} onPress={handleNext}>
        <AntDesign name="right" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
}

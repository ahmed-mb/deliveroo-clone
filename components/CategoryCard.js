import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { withExpoSnack } from "nativewind";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative ml-3">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

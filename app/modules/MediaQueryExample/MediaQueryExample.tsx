import {
  View,
  Dimensions,
  useWindowDimensions,
  Image,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import styles from './styles';
import {Header} from '../../components';

const MediaQueryExample = () => {
  const window = useWindowDimensions();
  const [productList, setProductList] = useState({isLoading: true, data: []});
  const screen = Dimensions.get('screen');

  const device = {
    width: window.width,
    height: window.height,
    deviceWidth: screen.width,
    deviceHeight: screen.height,
    aspectRatio: (window.width / window.height).toString(),
    deviceAspectRatio: (screen.width / screen.height).toString(),
  };

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res?.json())
      .then(res =>
        setProductList({data: res?.products ?? [], isLoading: false}),
      )
      .catch(() => setProductList({data: [], isLoading: false}));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const isMobile = useMediaQuery(
    {
      minWidth: 320,
      maxWidth: 520,
    },
    device,
  );
  const isTablet = useMediaQuery(
    {
      minWidth: 521,
      maxWidth: 920,
    },
    device,
  );
  const isDesktopOrLaptop = useMediaQuery(
    {
      minWidth: 921,
      maxWidth: 1440,
    },
    device,
  );

  console.log(
    isDesktopOrLaptop,
    'isDesktopOrLaptop',
    isTablet,
    'isTablet',
    isMobile,
    'isMobile',
  );
  const mediaQueryStyles = styles(
    isTablet,
    isMobile,
    isDesktopOrLaptop,
    window.width,
  );

  const card = ({item}: any) => {
    return (
      <View style={mediaQueryStyles.cardContainer}>
        <Image
          source={{uri: item?.thumbnail ?? item?.images?.[0]}}
          style={mediaQueryStyles.image}
          resizeMode="contain"
        />
        <View style={mediaQueryStyles.textContainer}>
          <Text style={mediaQueryStyles.title} numberOfLines={1}>
            {item?.title ?? ''}
          </Text>
          <Text style={mediaQueryStyles.brand}>{item?.brand ?? ''}</Text>
          <Text style={mediaQueryStyles.description} numberOfLines={2}>
            {item?.description ?? ''}
          </Text>
        </View>
        <Text style={mediaQueryStyles.price}>$ {item?.price ?? 0}.00</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={mediaQueryStyles.mainContainer}>
      <Header title="Media Query" />
      {productList.isLoading ? (
        <ActivityIndicator style={{height: window.height}} size="large" />
      ) : (
        <FlatList
          data={productList.data}
          renderItem={card}
          contentContainerStyle={mediaQueryStyles.contentContainerStyle}
          style={mediaQueryStyles.flatList}
        />
      )}
    </SafeAreaView>
  );
};

export default MediaQueryExample;

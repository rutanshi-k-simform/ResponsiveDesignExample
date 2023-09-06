import {
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Header} from '../../components';
import {Metrics} from '../../theme';

const {
  globalMetrics: {isWeb, isTablet},
} = Metrics;

const DimensionsExample = () => {
  const {width, height} = useWindowDimensions();
  const dimensionStyles = styles(width, height);
  const [productList, setProductList] = useState({isLoading: true, data: []});
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

  const card = ({item}: any) => {
    return (
      <View style={dimensionStyles.cardContainer}>
        <Image
          source={{uri: item?.thumbnail ?? item?.images?.[0]}}
          style={dimensionStyles.image}
          resizeMode="contain"
        />
        <View style={dimensionStyles.textContainer}>
          <Text style={dimensionStyles.title} numberOfLines={1}>
            {item?.title ?? ''}
          </Text>
          <Text style={dimensionStyles.brand}>{item?.brand ?? ''}</Text>
          <Text style={dimensionStyles.description} numberOfLines={2}>
            {item?.description ?? ''}
          </Text>
          <Text style={dimensionStyles.price}>$ {item?.price ?? 0}.00</Text>
        </View>
      </View>
    );
  };

  const emptyComponent = () => <Text>Oops! Something went wrong</Text>;

  return (
    <SafeAreaView style={dimensionStyles.mainContainer}>
      <Header title="Dimensions" />
      {productList.isLoading ? (
        <ActivityIndicator style={dimensionStyles.loader} size="large" />
      ) : (
        <FlatList
          data={productList.data}
          renderItem={card}
          numColumns={isWeb ? 4 : isTablet ? 2 : 1}
          contentContainerStyle={dimensionStyles.contentContainerStyle}
          ListEmptyComponent={emptyComponent}
          style={dimensionStyles.flatListStyle}
        />
      )}
    </SafeAreaView>
  );
};

export default DimensionsExample;

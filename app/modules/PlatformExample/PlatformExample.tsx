import {
  View,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Header} from '../../components';
import {Metrics} from '../../theme';

const {height, width} = Metrics;

const card = ({item}: any) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: item?.thumbnail ?? item?.images?.[0]}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item?.title ?? ''}
        </Text>
        <Text style={styles.brand}>{item?.brand ?? ''}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item?.description ?? ''}
        </Text>
      </View>
      <Text style={styles.price}>$ {item?.price ?? 0}.00</Text>
    </View>
  );
};

const emptyComponent = () => <Text>Oops! Something went wrong</Text>;

const PlatformExample = () => {
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Platform" />
      {productList.isLoading ? (
        <ActivityIndicator style={{height}} size="large" />
      ) : (
        <FlatList
          data={productList.data}
          renderItem={card}
          numColumns={Math.floor(width / 300)}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={emptyComponent}
          style={styles.flatList}
        />
      )}
    </SafeAreaView>
  );
};

export default PlatformExample;

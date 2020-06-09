import React, { useState } from 'react';

import Carousel from 'react-native-snap-carousel';

import { MaterialIcons } from '@expo/vector-icons';

import {
  ContMain,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

import tenis from '../../assets/images/tenis.jpg';

export default function Home({ navigation }) {
  const [state, setState] = useState({
    activeIndex: 0,
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 'R$ 179,90',
        image: tenis,
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 'R$ 139,90',
        image: tenis,
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 'R$ 219,90',
        image: tenis,
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 'R$ 179,90',
        image: tenis,
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 'R$ 139.90',
        image: tenis,
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 'R$ 219,90',
        image: tenis,
      },
    ],
  });

  function _renderItem({ item }) {
    return (
      <Product>
        <ProductImage source={item.image} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton onPress={(index) => navigation.navigate('Cart')}>
          <ProductAmount>
            <MaterialIcons name="add-shopping-cart" size={24} color="#fff" />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <>
      <ContMain>
        <Container>
          <Logo />
          <BasketContainer>
            <MaterialIcons name="shopping-cart" size={24} color="#fff" />
            <ItemCount>0</ItemCount>
          </BasketContainer>
        </Container>
        <Carousel
          data={state.products}
          renderItem={_renderItem}
          sliderWidth={400}
          itemWidth={300}
          onSnapToItem={(index) => setState({ ...state, activeIndex: index })}
        />
      </ContMain>
    </>
  );
}

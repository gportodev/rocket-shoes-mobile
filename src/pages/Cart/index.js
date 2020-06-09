import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import {
  ContMain,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
} from './styles';

import tenis from '../../assets/images/tenis.jpg';

export default function Cart() {
  return (
    <ContMain>
      <Container>
        <Logo />
        <BasketContainer>
          <MaterialIcons name="shopping-cart" size={24} color="#fff" />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
      <ProductInfo>
        <ProductImage source={tenis} />
        <ProductDetails>
          <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
          <ProductPrice>R$ 179,90</ProductPrice>
        </ProductDetails>
      </ProductInfo>
    </ContMain>
  );
}

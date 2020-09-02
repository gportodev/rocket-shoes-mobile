import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import {
  ContMain,
  Container,
  Logo,
  BasketContainer,
  ContanAux,
  ItemCount,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

import colors from '../../styles/colors';

import tenis from '../../assets/images/tenis.jpg';

export default function Cart() {
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
      </ContMain>
      <ContanAux>
        <ProductInfo>
          <ProductImage source={tenis} />
          <ProductDetails>
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>R$ 179,90</ProductPrice>
          </ProductDetails>
          <ProductDelete>
            <MaterialIcons
              name="delete-forever"
              size={24}
              color={colors.primary}
            />
          </ProductDelete>
        </ProductInfo>
        <ProductControls>
          <ProductControlButton>
            <MaterialIcons
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlButton>
          <ProductAmount>0</ProductAmount>
          <ProductControlButton>
            <MaterialIcons
              name="add-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlButton>
          <ProductSubtotal>R$ 179,00</ProductSubtotal>
        </ProductControls>
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$ 179,00</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
        {/* <EmptyContainer>
          <MaterialIcons name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer> */}
      </ContanAux>
    </>
  );
}

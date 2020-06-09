/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';


export const ContMain = styled.SafeAreaView`
  flex: 1;
  background: #191920;
  /* background: #fff; */
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185;
  height: 24;
`;

export const BasketContainer = styled.TouchableOpacity`
height: 24;
width: 24;
flex: 1;
align-items: flex-end;
justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8;
  right: -8;
  min-width: 18;
  min-height: 18;
  background: #7159c1;
  color: #fff;
  font-size: 12;
  padding: 2px;
  border-radius: 10;
  overflow: hidden;
`;

export const Product = styled.View`
  background: #fff;
  width: 250;
  height: 400;
  padding: 15px;
  margin-bottom: 100;
  border-radius: 15;
`;

export const ProductImage = styled.Image`
  height: 200;
  width: 200;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

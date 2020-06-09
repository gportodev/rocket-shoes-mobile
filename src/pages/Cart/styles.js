import styled from 'styled-components/native';

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

export const ProductInfo = styled.View`
  margin-bottom: 300;
  background: #fff;
  width: 60%;
  height: 35%;
  border-radius: 10;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-weight: 900;
  padding-right: 10;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;
export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;

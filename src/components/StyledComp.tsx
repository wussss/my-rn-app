import React from 'react';
import styled from 'styled-components/native';

// 基于 color token 和 styled-components 的组件化主题方案

// flex 是以上三个属性的简写值，快捷值 initial(0 1 auto) | auto(1 1 auto) | none(0 0 auto)
// flex: 1（1 1 0）, flex:0 (0 0 0)
export const FlexView = styled.View<{dir?: string; isPageContainer?: boolean}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${({isPageContainer = false}) => (isPageContainer ? 'flex-start' : 'center')};
  align-items: center;
  flex-direction: ${({dir = 'column'}) => dir};
  flex: ${({isPageContainer = false}) => (isPageContainer ? 1 : 'none')};
`;

export const Input = styled.TextInput`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #333;
  margin: 20px 0;
`;

export const Button = styled.Button`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #333;
  margin: 20px 0;
`;

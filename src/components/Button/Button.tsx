import { ButtonHTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 7px 10px 7px 10px;
  background-color: #0c47bf;
  border: none;
  border-radius: 5px;
  color: white;

  &:disabled {
    background-color: rgba(92, 131, 191, 0.6);
    cursor: not-allowed;
  }

  &:hover {
    background-color: #021f97;
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: Interpolation<Theme>;
}

const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;

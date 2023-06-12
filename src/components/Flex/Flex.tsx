import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface FlexContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FlexContainer = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

interface FlexItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flex?: string;
}

const FlexItem = styled.div<{ flex: string }>`
  flex: ${(props) => props.flex};
`;

const Flex = {
  Row: (props: FlexContainerProps) => (
    <FlexContainer direction="row" {...props} />
  ),
  Col: (props: FlexContainerProps) => (
    <FlexContainer direction="column" {...props} />
  ),
  Item: ({ flex = '1', ...props }: FlexItemProps) => (
    <FlexItem flex={flex} {...props} />
  ),
};

export default Flex;

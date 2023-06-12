import { css, SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { Flex } from '../';

interface Props {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  customCss?: {
    wrapper?: SerializedStyles;
    header?: SerializedStyles;
    content?: SerializedStyles;
    footer?: SerializedStyles;
  };
}

const Layout = ({ header, content, footer, customCss }: Props) => {
  return (
    <Flex.Col
      css={css`
        width: 100%;
        height: 100%;
        align-items: center;
        overflow: none;
        ${customCss?.wrapper}
      `}
    >
      {header && (
        <Flex.Item
          css={css`
            width: 100%;
            min-height: 50px;
            max-height: 10%;
            ${customCss?.header}
          `}
        >
          {header}
        </Flex.Item>
      )}
      {content && (
        <Flex.Item
          css={css`
            overflow: auto;
            ${customCss?.content}
          `}
        >
          {content}
        </Flex.Item>
      )}
      {footer && (
        <Flex.Item
          css={css`
            margin: auto;
            ${customCss?.footer}
          `}
        >
          {footer}
        </Flex.Item>
      )}
    </Flex.Col>
  );
};

export default Layout;

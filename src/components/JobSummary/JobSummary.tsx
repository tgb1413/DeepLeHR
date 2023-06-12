import { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import { css, SerializedStyles } from '@emotion/react';
import { Flex, Button } from '..';

interface Props {
  imgSrc?: string;
  companyName?: string;
  startTime?: string;
  endTime?: string;
  title?: string;
  bookmark?: number;
  view?: number;
  buttonProp?: ButtonHTMLAttributes<HTMLButtonElement>;
  containerCss?: SerializedStyles;
}

const JobSummary = ({
  imgSrc = '',
  companyName,
  startTime,
  endTime,
  title,
  bookmark,
  view,
  buttonProp,
  containerCss,
}: Props) => {
  return (
    <Flex.Row
      css={css`
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px 0 10px 0;
        align-items: center;
        ${containerCss}
      `}
    >
      <Flex.Item
        css={css`
          padding: 10px;
          flex: 0 0 content;
        `}
      >
        <Image src={imgSrc} alt="product_img" width={100} height={100} />
      </Flex.Item>
      <Flex.Item
        css={css`
          height: 105px;
          padding: 10px;
          flex: 3 1 auto;
        `}
      >
        <Flex.Col
          css={css`
            height: 100%;
            justify-content: space-between;
          `}
        >
          {startTime} ~ {endTime}
          <Flex.Col>
            <Flex.Item>{companyName}</Flex.Item>
            <Flex.Item
              css={css`
                font-size: 18px;
                font-weight: bold;
              `}
            >
              {title}
            </Flex.Item>
          </Flex.Col>
        </Flex.Col>
      </Flex.Item>
      <Flex.Item
        css={css`
          width: 300px;
          height: 105px;
          padding: 10px;
          flex: 0.5 1 content;
        `}
      >
        <Flex.Col
          css={css`
            height: 100%;
            justify-content: space-between;
            align-items: flex-end;
          `}
        >
          북마크 수 : {bookmark} / 조회 수 : {view}
          <Button
            css={css`
              width: 150px;
            `}
            {...buttonProp}
          />
        </Flex.Col>
      </Flex.Item>
    </Flex.Row>
  );
};

export default JobSummary;

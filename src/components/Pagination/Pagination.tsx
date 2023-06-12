import { useState, useMemo, useEffect } from 'react';
import { css, Interpolation, Theme } from '@emotion/react';
import { Button, Flex } from '..';

interface Props {
  total?: number;
  currentPage?: number;
  onChange?: (pageNumber: number) => void;
  containerCss?: Interpolation<Theme>;
  totalPage?: number;
}

const Pagination = ({
  total = 0,
  currentPage,
  onChange,
  containerCss,
}: Props) => {
  const pageUnit = 5;
  const pages = useMemo(
    () => Array.from({ length: total }, (_, index) => index + 1),
    [total],
  );
  const [focused, setFocused] = useState(1);

  useEffect(() => {
    if (currentPage) {
      setFocused(currentPage);
    }
  }, [currentPage]);

  const commonButtonStyle = useMemo(
    () => css`
      background-color: transparent;
      border: none;
      border-radius: 5px;
      margin: 5px;
      cursor: pointer;
      font-size: 20px;
      color: black;

      &:hover {
        background-color: rgba(92, 131, 191, 0.6);
      }
    `,
    [],
  );

  const focusedStyle = useMemo(
    () => css`
      ${commonButtonStyle}
      background-color: #0c47af;
      color: white;
    `,
    [commonButtonStyle],
  );

  const onChangePage = (page: number) => {
    if (page <= total && page >= 1) {
      setFocused(page);
      onChange && onChange(page);
    }
  };

  return (
    <Flex.Row css={containerCss}>
      <Button css={commonButtonStyle} onClick={() => onChangePage(1)}>
        {'<<'}
      </Button>
      <Button css={commonButtonStyle} onClick={() => onChangePage(focused - 1)}>
        {'<'}
      </Button>
      {pages
        .slice(
          pageUnit * Math.floor((focused - 1) / pageUnit),
          pageUnit * (Math.floor((focused - 1) / pageUnit) + 1),
        )
        .map((page) => (
          <Button
            key={page}
            css={page === focused ? focusedStyle : commonButtonStyle}
            onClick={() => onChangePage(page)}
          >
            {page}
          </Button>
        ))}
      <Button css={commonButtonStyle} onClick={() => onChangePage(focused + 1)}>
        {'>'}
      </Button>
      <Button
        css={commonButtonStyle}
        onClick={() => onChangePage(pages.length)}
      >
        {'>>'}
      </Button>
    </Flex.Row>
  );
};

export default Pagination;

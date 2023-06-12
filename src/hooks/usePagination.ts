import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const sliceWithPage = <T extends unknown>(items: T[]): T[] => {
    const itemNumberPerPage = 5;
    return items.slice(
      (page - 1) * itemNumberPerPage,
      page * itemNumberPerPage,
    );
  };

  return { page, setPage, nextPage, prevPage, sliceWithPage };
};

export default usePagination;

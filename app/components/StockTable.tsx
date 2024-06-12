import React, { useState, useEffect } from 'react';
import { getCars } from '../actions/stockActions';
import Car from '../types/Car';
import { SelectChangeEvent } from '@mui/material';
import CustomPagination from './CustomPagination';
import CustomTable from './CustomTable';

interface Props {
  mark: string;
  models: string[];
}

const StockTable: React.FC<Props> = ({ mark, models }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [_, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { cars, total } = await getCars(mark, models, page, limit);
      setCars(cars);
      setTotal(total);
      setPagesCount(Math.ceil(total / limit));
    }
    fetchData();
  }, [mark, models, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [mark, models]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeLimit = (event: SelectChangeEvent<string>) => setLimit(parseInt(event.target.value));

  return (
    <div style={{ width: '100%' }}>
      <CustomTable cars={cars} />
      <CustomPagination
        pagesCount={pagesCount}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeLimit={handleChangeLimit}
        limit={limit}
      />
    </div>
  );
};

export default StockTable;

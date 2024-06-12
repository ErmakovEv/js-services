import { Select, MenuItem, FormControl, InputLabel, Pagination, SelectChangeEvent, Box } from '@mui/material';

type Props = {
  pagesCount: number;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  limit: number;
  handleChangeLimit: (event: SelectChangeEvent<string>) => void;
};

function CustomPagination({ pagesCount, page, handleChangePage, limit, handleChangeLimit }: Props) {
  return (
    <Box sx={{ position: 'absolute', right: 10, display: 'flex' }}>
      <Pagination
        count={pagesCount}
        page={page}
        onChange={handleChangePage}
        siblingCount={1}
        boundaryCount={1}
        shape="rounded"
      />
      <FormControl>
        <Select value={limit.toString()} onChange={handleChangeLimit} size="small">
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomPagination;

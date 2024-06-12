import Car from '../types/Car';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

type Props = {
  cars: Car[];
};

function CustomTable({ cars }: Props) {
  const formattedDateTime = (date: string) =>
    new Date(date).toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <TableContainer component={Paper} sx={{ mb: 1 }}>
      <Table>
        <TableHead sx={{ backgroundColor: `#c0bfbf` }}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Марка/Модель</TableCell>
            <TableCell>Модификация</TableCell>
            <TableCell>Комплектация</TableCell>
            <TableCell>Стоимость</TableCell>
            <TableCell>Дата создания</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow key={car._id}>
              <TableCell>{car._id}</TableCell>
              <TableCell>
                {car.mark} / {car.model}
              </TableCell>
              <TableCell>{`${car.engine.volume} (${car.engine.power} л.с.) ${car.engine.transmission} ${
                car.drive === '4WD' ? '4WD' : ''
              }`}</TableCell>
              <TableCell>{car.equipmentName}</TableCell>
              <TableCell>{formatPrice(car.price)}</TableCell>
              <TableCell>{formattedDateTime(car.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;

import React, { useState, useEffect } from 'react';
import { Box, Stack, ListItem, ListItemText, Typography } from '@mui/material';
import { getMarks } from '../actions/stockActions';

interface Mark {
  _id: string;
  count: number;
}

interface Props {
  onSelectMark: (mark: string) => void;
}

const MarkNavbar: React.FC<Props> = ({ onSelectMark }) => {
  const [marks, setMarks] = useState<Mark[]>([]);

  useEffect(() => {
    async function fetchMarks() {
      const marksData = await getMarks();
      setMarks(marksData);
    }
    fetchMarks();
  }, []);

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'left', mb: 1 }}
    >
      {marks.map((mark) => (
        <Box key={mark._id} onClick={() => onSelectMark(mark._id)} sx={{ cursor: 'pointer' }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body1" color="primary">
              {mark._id}
            </Typography>
            <Typography variant="body1" sx={{ ml: 1 }}>
              {mark.count}
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default MarkNavbar;

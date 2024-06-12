'use client';
import React, { useState } from 'react';
import MarkNavbar from './components/MarkNavbar';
import ModelFilter from './components/ModelFilter';
import StockTable from './components/StockTable';

import { Box, Container, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  const [selectedMark, setSelectedMark] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string[]>([]);

  const handleSelectMark = (mark: string) => {
    setSelectedMark(mark);
    setSelectedModel([]);
  };

  const handleSelectModel = (models: string[]) => {
    setSelectedModel(models);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <MarkNavbar onSelectMark={handleSelectMark} />
      <ModelFilter mark={selectedMark} onSelectModel={handleSelectModel} />
      <StockTable mark={selectedMark} models={selectedModel} />
    </div>
  );
};

export default HomePage;

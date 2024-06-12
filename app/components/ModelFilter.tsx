'use client';

import React, { useState, useEffect } from 'react';
import { getModels } from '../actions/stockActions';
import { TextField, Autocomplete } from '@mui/material';

interface Model {
  _id: string;
  count: number;
}

interface Props {
  mark: string;
  onSelectModel: (models: string[]) => void;
}

const ModelFilter: React.FC<Props> = ({ mark, onSelectModel }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModels, setSelectedModels] = useState<Model[]>([]);

  useEffect(() => {
    async function fetchModels() {
      if (mark) {
        const modelsData = await getModels(mark);
        setModels(modelsData);
        setSelectedModels([]);
      }
    }
    fetchModels();
  }, [mark]);

  const handleModelChange = (event: React.ChangeEvent<{}>, value: Model[]) => {
    setSelectedModels(value);
    onSelectModel(value.map((model) => model._id));
  };

  return (
    <div>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={models}
        getOptionLabel={(option) => option._id}
        renderInput={(params) => <TextField {...params} placeholder="Модель" />}
        sx={{ width: '500px' }}
        onChange={handleModelChange}
        value={selectedModels}
        size="small"
        style={{ minWidth: 150, marginBottom: 10 }}
      />
    </div>
  );
};

export default ModelFilter;

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BookSearch from './frontend/components/BookSearch';
import ReadingList from './frontend/components/ReadingList';

const App: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Ello Book Assignment
        </Typography>
        <BookSearch />
        <ReadingList />
      </Box>
    </Container>
  );
};

export default App;

// src/frontend/components/ReadingList.tsx

import React from 'react';
import { List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';
import { useReadingList } from '../context/ReadingListContext';

const ReadingList: React.FC = () => {
  const { readingList, removeBook } = useReadingList();

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Reading List
      </Typography>
      <List>
        {readingList.map((book) => (
          <ListItem key={book.title}>
            <ListItemText primary={book.title} secondary={book.author} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeBook(book.title)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ReadingList;

// src/frontend/components/BookSearch.tsx

import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { useReadingList } from '../context/ReadingListContext';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const BookSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addBook } = useReadingList();
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredBooks = data.books.filter((book: any) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />
      <List>
        {filteredBooks.map((book: any) => (
          <ListItem key={book.title}>
            <ListItemText primary={book.title} secondary={book.author} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => addBook(book)}
            >
              Add to Reading List
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BookSearch;

// src/frontend/context/ReadingListContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Book = {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
};

type ReadingListContextType = {
  readingList: Book[];
  addBook: (book: Book) => void;
  removeBook: (title: string) => void;
};

const ReadingListContext = createContext<ReadingListContextType | undefined>(undefined);

export const ReadingListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  const addBook = (book: Book) => setReadingList((prevList) => [...prevList, book]);
  const removeBook = (title: string) => setReadingList((prevList) => prevList.filter((book) => book.title !== title));

  return (
    <ReadingListContext.Provider value={{ readingList, addBook, removeBook }}>
      {children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = (): ReadingListContextType => {
  const context = useContext(ReadingListContext);
  if (!context) throw new Error('useReadingList must be used within a ReadingListProvider');
  return context;
};

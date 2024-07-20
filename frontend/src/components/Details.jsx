import React, { useEffect } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import BackButton from "./BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchbooks } from "../actions/books";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((book) => book._id === id));

  useEffect(() => {
    dispatch(fetchbooks);
  }, [id, dispatch]);

  return (
    <Box>
      <BackButton />
      {id && (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            margin: 5,
            width: "500px",
            padding: 3,
            border: "solid 1px rgb(124, 203, 249)",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography color="GrayText">Id</Typography>{" "}
            <Typography fontSize={14} color='black'>{book._id}</Typography>{" "}
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Title</Typography>{" "}
            <Typography fontSize={14} color='black'> {book.title}</Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Author</Typography>{" "}
            <Typography fontSize={14} color='black'>{book.author}</Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Publish Year</Typography>
            <Typography fontSize={14} color='black'> {book.publishYear}</Typography>
          </Stack>
          <Stack direction='row' spacing={3}>
            <Typography color="GrayText">Create Time</Typography>{" "}
            <Typography>{new Date(book.createdAt).toString()}</Typography>
          </Stack>
          <Stack direction='row' spacing={3}>
            <Typography color="GrayText">Last Update Time </Typography>
            <Typography>{new Date(book.updatedAt).toString()}</Typography>
          </Stack>
        </Card>
      )}
    </Box>
  );
};

export default Details;

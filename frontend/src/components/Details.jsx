import React, { useEffect } from "react";
import { Box, Card, Stack, Typography, styled } from "@mui/material";
import BackButton from "./BackButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchbook } from "../actions/books";
import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchbook(id));
  }, [id, dispatch]);

  return (
    <Box>
      <BackButton />
      {books._id === id && (
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
            <Typography fontSize={14} color='black'>{books._id}</Typography>{" "}
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Title</Typography>{" "}
            <Typography fontSize={14} color='black'> {books.title}</Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Author</Typography>{" "}
            <Typography fontSize={14} color='black'>{books.author}</Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Typography color="GrayText">Publish Year</Typography>
            <Typography fontSize={14} color='black'> {books.publishYear}</Typography>
          </Stack>
          {/* <Stack direction='row' spacing={3}>
            <Typography color="GrayText">Create Time</Typography>{" "}
            <Typography>{new Date(books.createdAt).toString()}</Typography>
          </Stack>
          <Stack direction='row' spacing={3}>
            <Typography color="GrayText">Last Update Time </Typography>
            <Typography>{new Date(books.updatedAt).toString()}</Typography>
          </Stack> */}
        </Card>
      )}
    </Box>
  );
};

export default Details;

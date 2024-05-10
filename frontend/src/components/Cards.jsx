import React, { useEffect } from "react";
import { Box, Card, Stack, Typography, styled } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import AddCircleIcon from "@mui/icons-material/AddCircle"; // Added import
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletebook, fetchbooks } from "../actions/books";
import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  PeopleOutlineRounded,
} from "@mui/icons-material";

const Cards = () => {
  const books = useSelector((state) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const StyledBox = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 25,
  });

  const StyledCard = styled(Card)({
    width: "300px",
    height: "100%",
    border: "solid 1px gray",
    padding: 10,
  });

  return (
    <>
      {!books.length ? (
        <p className="none">
          No Books
          <Link to="/create" className="create">
            <AddCircleIcon sx={{ color: "#0d550d", fontSize: 30 }} />
          </Link>
        </p>
      ) : (
        <StyledBox>
          <Box className="table-card">
            <Link to="/" className="table-link">
              Table
            </Link>
            <Link to="/cards" className="card-link">
              Card
            </Link>
          </Box>
          <Box className="list-add">
            <span className="list">Books List</span>
            <Link to="/create">
              <AddCircleIcon sx={{ color: "#0d550d", fontSize: 30 }} />
            </Link>
          </Box>

          {books.map((book) => (
            <Box key={book._id} p={2}>
              <StyledCard>
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography sx={{ fontSize: 13, color: "Grey" }}>
                      {book._id}
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "pink",
                        borderRadius: 2,
                        padding: "5px 15px",
                        fontSize: 13,
                      }}
                    >
                      {book.publishYear}
                    </Typography>
                  </Stack>
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <BookOutlined sx={{ color: "pink", fontSize: 18 }} />
                    <Typography>{book.title}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PeopleOutlineRounded
                      sx={{ color: "pink", fontSize: 18 }}
                    />
                    <Typography>{book.author}</Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Stack direction="row" spacing={5}>
                    <InfoOutlinedIcon
                      sx={{ color: "GrayText", cursor: "pointer" }}
                    />
                    <EditOutlined
                      sx={{ color: "orange", cursor: " pointer" }}
                      onClick={() => handleEdit(book._id)}
                    />
                    <DeleteOutlined
                      sx={{ color: "orangered", cursor: "pointer" }}
                      onClick={() => dispatch(deletebook(book._id))}
                    />
                  </Stack>
                </Box>
              </StyledCard>
            </Box>
          ))}
        </StyledBox>
      )}
    </>
  );
};

export default Cards;

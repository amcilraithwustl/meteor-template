import * as React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Container from "@mui/material/Container";
import { contains, d, subtract } from "../api/basicDice";

export const TakePollPage = (): JSX.Element => {
  console.log(d(2, 6));
  console.log(contains(d(2, 6), 5));
  console.log(contains(d(2, 6), 1));
  console.log(subtract(d(1, 6), d(1, 6)));
  return (
    <Container>
      <Stack spacing={3}>
        <Typography variant="h3" textAlign="center">
          Hello World!
        </Typography>
      </Stack>
    </Container>
  );
};

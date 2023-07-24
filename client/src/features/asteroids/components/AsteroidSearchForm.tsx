import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateValidationError } from "@mui/x-date-pickers/models";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs, { Dayjs } from "dayjs";
import { MAX_RANGE_DAYS } from "../../../constants";

interface AsteroidSearchFormProps {
  isLoading: boolean;
  onClickSearch: (startDate: string, endDate: string) => void;
}

function AsteroidSearchForm({
  isLoading,
  onClickSearch,
}: AsteroidSearchFormProps) {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const minEndDate = startDate!.add(-MAX_RANGE_DAYS, "day");
  const maxEndDate = startDate!.add(MAX_RANGE_DAYS, "day");
  const [endDate, setEndDate] = useState<Dayjs | null>(maxEndDate);
  const [error, setError] = useState<DateValidationError | null>();

  const handleClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (startDate && endDate) {
      onClickSearch(
        startDate.format("YYYY-MM-DD"),
        endDate.format("YYYY-MM-DD"),
      );
    }
  };

  return (
    <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
      component="form"
      onSubmit={handleClickSearch}
    >
      <DatePicker
        label="Start date"
        onChange={(newValue) => setStartDate(newValue)}
        value={startDate}
      />
      <DatePicker
        label="End date"
        minDate={minEndDate}
        maxDate={maxEndDate}
        onError={(newError) => setError(newError)}
        onChange={(newValue) => setEndDate(newValue)}
        value={endDate}
      />
      <Button disabled={!!error} variant="contained" type="submit">
        {isLoading ? (
          <CircularProgress color="inherit" sx={{ mx: 1 }} />
        ) : (
          "Search"
        )}
      </Button>
    </Stack>
  );
}

export default AsteroidSearchForm;

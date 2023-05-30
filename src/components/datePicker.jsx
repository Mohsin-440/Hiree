import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MUIDatepicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const DatePickerComp = ({ onChange, value }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "MobileDatePicker", "DesktopDatePicker"]}
      >
        <DemoItem>
          <MUIDatepicker className="w-full" onChange={onChange} value={value} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

function DatePicker({ control, rules }) {
  return (
    <Controller
      name={"DOB"}
      control={control}
      rules={rules}

      render={({ field: { onChange, value } }) => (
        <DatePickerComp onChange={(e) => onChange(e["$d"])} value={value} />
      )}

    />
  );
}

export default DatePicker;

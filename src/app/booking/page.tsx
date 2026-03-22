"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const handleBooking = () => {
    if (!nameLastname || !tel || !venue || !bookDate) return;
    dispatch(
      addBooking({
        nameLastname,
        tel,
        venue,
        bookDate: bookDate.format("YYYY-MM-DD"),
      }),
    );
    alert("Booking successful!");
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        paddingTop: "80px",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl flex flex-col gap-4"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Book a Venue
        </h1>
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
          sx={{ input: { color: "white" }, label: { color: "white" } }}
        />
        <TextField
          name="Contact-Number"
          label="Contact Number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          sx={{ input: { color: "white" }, label: { color: "white" } }}
        />
        <Select
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          displayEmpty
          sx={{ color: "white" }}
        >
          <MenuItem value="" disabled>
            Select Venue
          </MenuItem>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Booking Date"
            value={bookDate}
            onChange={(val) => setBookDate(val)}
          />
        </LocalizationProvider>
        <Button
          name="Book Venue"
          variant="contained"
          onClick={handleBooking}
          sx={{ mt: 2 }}
        >
          Book Venue
        </Button>
      </div>
    </main>
  );
}

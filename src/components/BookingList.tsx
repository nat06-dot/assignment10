"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interfaces";

export default function BookingList() {
  const bookItems = useSelector(
    (state: RootState) => state.bookSlice?.bookItems ?? [],
  );
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-white text-xl opacity-60">No Venue Booking</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {bookItems.map((item: BookingItem, index: number) => (
        <div
          key={index}
          className="rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <p className="text-white text-lg font-semibold">
                {item.nameLastname}
              </p>
              <p className="text-white opacity-70">📞 {item.tel}</p>
              <p className="text-white opacity-70">📍 {item.venue}</p>
              <p className="text-white opacity-70">📅 {item.bookDate}</p>
            </div>
            <button
              onClick={() => dispatch(removeBooking(item))}
              className="px-4 py-2 rounded-xl text-red-400 font-semibold"
              style={{
                background: "rgba(255,100,100,0.15)",
                border: "1px solid rgba(255,100,100,0.3)",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

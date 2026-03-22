import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main
      className="min-h-screen px-8"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        paddingTop: "80px",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">My Bookings</h1>
        <BookingList />
      </div>
    </main>
  );
}

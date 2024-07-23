import { ReservationProvider } from "../../../context/ReservationContext";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Testimonials component", () => {
    const confirmation = jest.fn();
    const BookingContextApp = () => {
      return (
        <ReservationProvider>
          <BookingForm confirmation={confirmation} />
        </ReservationProvider>
      )
    }
    test("renders the testimonial cards", () => {
      render(<BookingContextApp />);
      
      // Check if the testimonial cards are rendered
      const testimonialCards = screen.getAllByTestId("testimonial-card");
      expect(testimonialCards).toHaveLength(3);
    });
});
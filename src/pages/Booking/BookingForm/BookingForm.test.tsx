import { ReservationProvider } from "../../../context/ReservationContext";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import userEvent from '@testing-library/user-event'
import { vi, describe, test } from 'vitest';

describe("BookingForm component", () => {
    const dateLabel = 'Choose date*';
    const timeLabel = 'Choose time*';
    const numberOfGuestLabel = 'Number of guests*';
    const ocassionLabel = 'Occasions';

    const confirmation = vi.fn();
    const BookingContextApp = () => {
      return (
        <ReservationProvider>
          <BookingForm confirmation={confirmation} />
        </ReservationProvider>
      )
    }
    describe("Renders", () => {
      test("renders form", () => {
        render(<BookingContextApp />);
        const bookingForm = screen.getAllByTestId("booking-form");
        expect(bookingForm).toBeDefined();
      });
      test("renders date input", () => {
        render(<BookingContextApp />);
        const dateField = screen.getByLabelText(dateLabel);
        expect(dateField).toBeDefined();
      });
      test("renders guests input", () => {
        render(<BookingContextApp />);
        const numberOfGuestField = screen.getByLabelText(numberOfGuestLabel);
        expect(numberOfGuestField).toBeDefined();
      });
      test("renders ocassion input", () => {
        render(<BookingContextApp />);
        const occasionField = screen.getByLabelText(ocassionLabel);
        expect(occasionField).toBeDefined();
      });
      test("renders button", () => {
        render(<BookingContextApp />);
        const button = screen.getByRole('button');
        expect(button).toBeDefined();
      });
      test("renders time input", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);
        const dateField = screen.getByLabelText(dateLabel);
        await user.type(dateField, "2000-01-01");
        const timeField = screen.getByLabelText(timeLabel);
        expect(timeField).toBeDefined();
      });
    });
    describe("Validate errors", () => {
      test("date should be valid", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);
        const date = screen.getByLabelText(dateLabel);
        await user.type(date, "2000-01-01");
        await user.tab();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('You cannot reserve old dates');
      });
      test("date should not be empty", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);
        const date = screen.getByLabelText(dateLabel);
        await user.click(date);
        await user.tab();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Required');
      });
      test("time should not be empty", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);

        const date = screen.getByLabelText(dateLabel);
        await user.type(date, "2125-01-01");

        const numberOfGuests = screen.getByLabelText(numberOfGuestLabel);
        await user.type(numberOfGuests, "2");

        const time = screen.getByLabelText(timeLabel);
        await user.click(time);

        const button = screen.getByRole('button');
        await user.click(button);

        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Required');
      });
      test("number of guests should not be empty", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);

        const numberOfGuests = screen.getByLabelText(numberOfGuestLabel);
        await user.click(numberOfGuests);
        await user.tab();

        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Required');
      });
    });
    describe('Events', () => {
      test("Success event", async () => {
        const user = userEvent.setup();
        render(<BookingContextApp />);

        const date = screen.getByLabelText(dateLabel);
        await user.type(date, "2100-01-01");
        await user.tab();

        const time = screen.getByLabelText(timeLabel);
        await user.selectOptions(time, screen.getAllByRole('option')[1]);
        
        const numberOfGuests = screen.getByLabelText(numberOfGuestLabel);
        await user.type(numberOfGuests, "2");

        const button = screen.getByRole('button');
        await user.click(button);

        expect(confirmation).toHaveBeenCalled();
      });
    });
});
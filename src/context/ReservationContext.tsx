import { createContext, useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/Api";

export type Reservation = {
  date: string;
  time: string;
  guests: number;
  ocassion: string;
};

export type ReservationContextType = {
  availableTimes: string[];
  dispatchOnDateChange: (date: string) => void;
  submitReservation: (r: Reservation) => void;
};

export const ReservationContext = createContext<ReservationContextType | null>(null);

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  
  const updateTimes = (availableTimes: string[], date: any) => {
    const response = fetchAPI(new Date(date.target.value));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes: string[]) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitReservation = (r: Reservation) => {
    const send = submitAPI(r);
    if (send) {
      // Success
    }
    // Handle errors
  };
  return (
    <ReservationContext.Provider
      value={{ availableTimes, dispatchOnDateChange, submitReservation }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

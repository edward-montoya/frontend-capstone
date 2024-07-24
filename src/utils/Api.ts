import { Reservation } from "../context/ReservationContext";

const db = localStorage.getItem("reservations");
const currentReservations: Reservation[] = db ? JSON.parse(db) : [];
const avaiableSlots: string[] = [];

for (let i = 16; i <= 23; i++) {
  avaiableSlots.push(i + ":00");
  avaiableSlots.push(i + ":30");
}
 
const fetchAPI = (date: string) => {
  console.log(avaiableSlots);
  console.log(currentReservations);
  console.log('current Date', date);
  
  return avaiableSlots.filter((value) => !(currentReservations.find(d => d.date === date && d.time === value)));
};

const submitAPI = (formData: Reservation) => {
  currentReservations.push(formData);
  localStorage.setItem("reservations", JSON.stringify(currentReservations));
  console.log(currentReservations);
  
  return true;
};

export { fetchAPI, submitAPI };
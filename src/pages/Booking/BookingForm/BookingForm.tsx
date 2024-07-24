import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import {
  Reservation,
  ReservationContext,
  ReservationContextType,
} from "../../../context/ReservationContext";

const BookingForm = ({ confirmation }: { confirmation: Function }) => {
  const { availableTimes, dispatchOnDateChange, submitReservation } =
    useContext(ReservationContext) as ReservationContextType;

  const getCurrentDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(getCurrentDate(), "You cannot reserve old dates")
        .required("Required"),
      time: Yup.string().required("Required 2"),
      guests: Yup.number()
        .required("Required")
        .min(1, "At least one person needs to assist")
        .max(
          10,
          "We only make reservation for maximum 10 people. For bigger reservation you need to call us."
        ),
    }),
    onSubmit: (values) => {
      // Do something with the data
      console.log("Form data: ", JSON.stringify(values, null, 2));
      const response = submitReservation(values as unknown as Reservation);
      if (response) {
        formik.resetForm();
        confirmation();
      }
    },
  });

  const occasionOptions = ["Birthday", "Anniversary"];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="booking-form"
      data-testid="booking-form"
    >
      <Input
        type="date"
        field="date"
        fieldLabel="Choose date*"
        formik={formik}
        onChange={dispatchOnDateChange}
      />
      {formik.values.date ? (
        <Input
          type="select"
          field="time"
          fieldLabel="Choose time*"
          formik={formik}
          options={availableTimes}
        />
      ) : (
        ""
      )}
      <Input
        type="number"
        field="guests"
        fieldLabel="Number of guests*"
        formik={formik}
      />
      <Input
        type="select"
        field="occasion"
        fieldLabel="Occasions"
        formik={formik}
        options={occasionOptions}
      />
      <Button type="submit" title="Make Your reservation" />
    </form>
  );
};

export default BookingForm;

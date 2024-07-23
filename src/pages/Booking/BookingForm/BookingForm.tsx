import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const BookingForm = ({ confirmation } : {confirmation: Function}) => {
  const getCurrentDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "17:00",
      guests: "",
      occasion: "Not specified",
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(getCurrentDate(), "You cannot reserve old dates")
        .required("Required"),
      time: Yup.string()
        .required("Required"),
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
      console.log('Form data: ', JSON.stringify(values, null, 2));
      confirmation();
    },
  });

  const occasionOptions = ['Not specified', 'Birthday', 'Anniversary'];
  const timeOptions = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '23:00']

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <Input
        type="date"
        field="date"
        fieldLabel="Choose date"
        formik={formik}
      />
      <Input
        type="select"
        field="time"
        fieldLabel="Choose time"
        formik={formik}
        options={timeOptions}
      />
      <Input
        type="number"
        field="guests"
        fieldLabel="Number of guests"
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

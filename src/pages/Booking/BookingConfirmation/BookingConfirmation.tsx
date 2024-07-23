import "./BookingConfirmation.scss";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Function;
}) => {
  const navigation = useNavigate();

  function closeModal() {
    setVisible(false);
    navigation("/");
  }

  return visible ? (
    <div
      className="modal"
      aria-live="polite"
      aria-labelledby="dialog_label"
      role="alertdialog"
      aria-modal="true"
    >
      <div className="modal__content">
        <h2 className="modal__title" id="dialog_label">
          Booking Confirmation
        </h2>
        <p className="modal__description">
          Thank you for choosing Little Lemon! Your reservation has been
          successfully made. You will receive a confirmation email with the
          details of your reservation. We are excited to see you soon!
        </p>
        <Button type="button" title="Close" onClick={() => closeModal()} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default BookingConfirmation;

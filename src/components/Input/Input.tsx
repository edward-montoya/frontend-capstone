import { FormikHandlers, FormikValues } from "formik";
import './Input.scss';

type InputProp = {
  formik: FormikHandlers & FormikValues;
  field: string;
  fieldLabel: string;
  type?: "date" | "text" | "time" | "number" | "select";
  options?: string[],
  onChange?: Function 
};

const Input = ({ formik, field, fieldLabel, type = "text", options = [], onChange }: InputProp) => {
  return (
    <div className="formField">
      <label className="label" htmlFor={field}>
        {fieldLabel}
      </label>
      {
      type !== 'select' ?
      <input
        className="input"
        id={field}
        name={field}
        type={type}
        onChange={(e) => { formik.handleChange(e);  onChange ? onChange(e) : '';}}
        onBlur={formik.handleBlur}
        value={formik.values[field]}
      /> : 
      <select
      className="input"
        id={field}
        value={formik.values[field]}
        onChange={formik.handleChange}
      >
        { options.map((option, index) => (<option key={`option-${index}`}>{option}</option>)) }
      </select>
    }
     {formik.touched[field] && formik.errors[field] ? (
        <div className="error">{formik.errors[field]}</div>
      ) : null} 
      
    </div>
  );
};

export default Input;

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputField({ onAdd }) {
  const [jobName, setjobName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [date, setDate] = useState(new Date());
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(jobName, companyName, date.toLocaleDateString());
    setjobName("");
    setcompanyName("");
    setDate(new Date());
  }
  return (
    <div className="my-8 mx-10 bg-sky-600 rounded-xl">
      {/* USE FORM FOR SUBMIT INSTEAD OF BUTTON EVENT LISTENER CUZ IT COVERS BOTH ENTER & CLICK */}
      <form className="relative flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full rounded-lg py-2 bg-stone-200 px-4 border-2 border-blue-600"
          placeholder="Add Job Position"
          value={jobName}
          required
          onChange={(e) => setjobName(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded-lg py-2 bg-stone-200 px-4 border-2 border-blue-600"
          placeholder="Enter Company Name"
          value={companyName}
          required
          onChange={(e) => setcompanyName(e.target.value)}
        />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="mr-4 h-10 bg-stone-200 rounded-lg px-2"
        />
        <button className="absolute bg-rose-400 right-6 px-3 py-1 rounded-md top-1">
          GO
        </button>
      </form>
    </div>
  );
}

export default InputField;

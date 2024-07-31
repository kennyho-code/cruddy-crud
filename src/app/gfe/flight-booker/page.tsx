"use client";

import { FormEvent, useState } from "react";

const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDate() + 1).toString().padStart(2, "0");
  return [year, month, day].join("-");
};

const dateStrToDate = (dateStr: string) => {
  return new Date(dateStr);
};

const TODAY = new Date(Date.now() + DAY_IN_SECONDS);

function Page() {
  const [flightType, setFlightType] = useState<string>("one-way-flight");
  const [fromDate, setFromDate] = useState<string>(formatDate(new Date()));
  const [toDate, setToDate] = useState<string>(fromDate);

  console.log(toDate);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Booked for a ${flightType} from ${fromDate} to ${toDate}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <select
          name="flight-input"
          aria-label="flight-input"
          value={flightType}
          onChange={(event) => {
            setFlightType(event.target.value);

            if (flightType === "return-flight") {
              setToDate(fromDate);
            }
          }}
          id="flight-input"
          className="border-2"
        >
          <option value="one-way-flight">One-way flight</option>
          <option value="return-flight">Return flight</option>
        </select>

        <input
          aria-label="from-date-input"
          value={fromDate}
          onChange={(event) => setFromDate(event.target.value)}
          type="date"
          name="from-return-input"
          className="border-2"
        />

        <label htmlFor="to-date-input" hidden>
          Flight
        </label>

        {flightType === "return-flight" && (
          <input
            aria-label="to-date-input"
            type="date"
            value={toDate}
            onChange={(event) => {
              setToDate(event.target.value);
            }}
            min={fromDate}
            name="to-date-input"
            className="border-2"
          />
        )}
        <button type="submit" className="border-2">
          Book
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Page;

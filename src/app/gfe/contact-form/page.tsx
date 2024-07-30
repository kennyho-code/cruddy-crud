"use client";

import { useCallService } from "@/utils/useService";
import { FormEvent, useState } from "react";

const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

function Page() {
  const [responseMessage, setResponseMessage] = useState<string | undefined>();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await response.text();
    setResponseMessage(data);
    return data;
  };

  return (
    <div>
      <form
        action="https://www.greatfrontend.com/api/questions/contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input id="name" type="text" name="name" className="border-2" />
        </div>

        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input type="text" id="email" name="email" className="border-2" />
        </div>

        <div>
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea id="message" name="message" className="border-2" />
        </div>
        <button type="submit" className="border-2">
          Send
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

function ServerForm() {
  return (
    <form
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      className="flex flex-col"
    >
      <div>
        <label htmlFor="name" className="block">
          Name:
        </label>
        <input id="name" type="text" name="name" className="border-2" />
      </div>

      <div>
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input type="text" id="email" name="email" className="border-2" />
      </div>

      <div>
        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea id="message" name="message" className="border-2" />
      </div>
      <button type="submit" className="border-2">
        Send
      </button>
    </form>
  );
}

export default Page;

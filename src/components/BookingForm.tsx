"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/data/business";

export interface Field {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export default function BookingForm({
  title,
  intro,
  fields,
  submitLabel,
}: {
  title: string;
  intro: string;
  fields: Field[];
  submitLabel: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send til backend/e-mail-service når den findes.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-surface p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-fjord-tint text-2xl text-fjord">
          ✓
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold">
          Tak for din henvendelse!
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-mist">
          Vi vender tilbage hurtigst muligt. Haster det, så ring til os på{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-fjord underline"
          >
            {business.phoneDisplay}
          </a>{" "}
          inden for åbningstiden.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-fjord";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">{intro}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `field-${field.name}`;
          const isWide = field.type === "textarea";
          return (
            <div key={field.name} className={isWide ? "sm:col-span-2" : ""}>
              <label
                htmlFor={id}
                className="mb-1.5 block text-sm font-medium"
              >
                {field.label}
                {field.required && <span className="text-rust"> *</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className={inputClasses}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Vælg…
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  min={field.type === "number" ? 1 : undefined}
                  className={inputClasses}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-fjord px-7 py-4 font-semibold text-white transition-colors hover:bg-fjord-deep sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}

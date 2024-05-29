"use client";

import { useActionState } from "react";

export default function mealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <>
      <button disabled={pending}>
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </>
  );
}

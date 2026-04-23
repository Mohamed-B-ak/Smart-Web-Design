"use client";
import { useEffect } from "react";

const calUrl = "https://cal.com/info-sondos-uzdcyl/meet-with-sondos-ai?hideEventTypeDetails=1&embed=1&embedType=inline";

export default function BookingPage() {
  useEffect(() => {
    window.open(calUrl, "_blank");
  }, []);

  return null;
}
"use client";
import { useAlternateUrls } from "@/context/AlternateUrlContext/AlternateUrlContextProvider";
import { Table } from "./Table";

export function TableContextWrapper() {
  const { links } = useAlternateUrls();

  return (
    <div
      style={{ border: "3px dotted red", background: "teal", width: "600px" }}
    >
      <p>Table is client rendered:</p>
      <Table alternateLinks={links} />
    </div>
  );
}

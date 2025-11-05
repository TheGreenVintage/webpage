import React from "react";
import Employee from "@/components/Employee";
import { loader as employeesLoader } from "@/loaders/employees";
import { notFound } from "next/navigation";
import { ca as locale } from "@/lib/locale";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { employees } = await employeesLoader(locale);
  const employee = employees.find((employee) => employee?.slug === params.slug);

  if (!employee) notFound();

  return <Employee locale={locale} employee={employee} />;
}

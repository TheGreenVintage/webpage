import { getClient } from "@/lib/apollo";
import { GetEmployeesDocument, GetEmployeesQuery } from "@/generated/graphql";

export type EmployeeType = NonNullable<GetEmployeesQuery["employees"][number]>;

export type PreContentType = NonNullable<
  NonNullable<GetEmployeesQuery["teamPage"]>["precontent"]
>[number];

export type PostContentType = NonNullable<
  NonNullable<GetEmployeesQuery["teamPage"]>["postcontent"]
>[number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetEmployeesQuery>({
    query: GetEmployeesDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.employees || !data.teamPage)
    throw new Error("Unable to load data");

  return {
    employees: data.employees.filter((x) => x !== null),
    page: data.teamPage,
  };
};

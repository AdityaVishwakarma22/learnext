interface Customer {
  id: string;
  name: string;
}

const customers: Customer[] = [{ id: "1", name: "adi" }];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
];

export { invoices };

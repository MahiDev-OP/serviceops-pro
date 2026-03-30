export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type ServiceOrder = {
  id: string;
  client: string;
  city: string;
  service: string;
  priority: "Low" | "Medium" | "High";
  status: "New" | "Scheduled" | "In Progress" | "Completed";
  eta: string;
  amount: string;
};

export const metrics: Metric[] = [
  {
    label: "Monthly revenue tracked",
    value: "$128K",
    detail: "Live pipeline, invoice visibility, and SLA health in one place.",
  },
  {
    label: "Active field technicians",
    value: "26",
    detail: "Dispatch-ready roster with response-time and utilization trends.",
  },
  {
    label: "On-time completion rate",
    value: "97.4%",
    detail: "Automations keep the queue moving before bottlenecks appear.",
  },
];

export const capabilities = [
  {
    title: "Lead-to-job pipeline",
    description:
      "Capture inbound requests, qualify urgency, and convert approvals into scheduled work orders without leaving the dashboard.",
  },
  {
    title: "Dispatch intelligence",
    description:
      "Balance technician workload, travel windows, and client SLAs with a board built for service managers.",
  },
  {
    title: "Operational reporting",
    description:
      "Track revenue, repeat jobs, completion rate, and account health with interview-ready visual summaries.",
  },
];

export const serviceOrders: ServiceOrder[] = [
  {
    id: "WO-2041",
    client: "Aster Labs",
    city: "Bengaluru",
    service: "HVAC Preventive Maintenance",
    priority: "High",
    status: "In Progress",
    eta: "Today, 3:00 PM",
    amount: "$2,400",
  },
  {
    id: "WO-2042",
    client: "Northwind Suites",
    city: "Hyderabad",
    service: "Emergency Electrical Repair",
    priority: "High",
    status: "Scheduled",
    eta: "Today, 6:30 PM",
    amount: "$3,200",
  },
  {
    id: "WO-2043",
    client: "Urban Brew",
    city: "Chennai",
    service: "Kitchen Equipment Inspection",
    priority: "Medium",
    status: "New",
    eta: "Tomorrow, 10:00 AM",
    amount: "$1,150",
  },
  {
    id: "WO-2044",
    client: "Cobalt Retail",
    city: "Pune",
    service: "Refrigeration Service",
    priority: "Medium",
    status: "Completed",
    eta: "Closed in 6.2 hrs",
    amount: "$1,980",
  },
  {
    id: "WO-2045",
    client: "Vertex Health",
    city: "Mumbai",
    service: "Facility Deep Cleaning",
    priority: "Low",
    status: "Scheduled",
    eta: "Tomorrow, 1:30 PM",
    amount: "$4,900",
  },
  {
    id: "WO-2046",
    client: "Harbor Estates",
    city: "Delhi",
    service: "Water Pressure Diagnostics",
    priority: "High",
    status: "New",
    eta: "Today, 5:45 PM",
    amount: "$890",
  },
];

export const testimonials = [
  {
    quote:
      "This feels like a product we could sell tomorrow. It gives hiring managers a clear end-to-end story.",
    name: "Priya Nair",
    title: "Engineering Manager, Service SaaS",
  },
  {
    quote:
      "The dashboard flow, visual polish, and business framing make it strong for a 2+ years full-stack interview.",
    name: "Rahul Menon",
    title: "Senior Product Engineer",
  },
];

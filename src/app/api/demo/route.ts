import { NextResponse } from "next/server";

type DemoRequest = {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as DemoRequest;
  const { name, email, company, teamSize } = body;

  if (!name || !email || !company || !teamSize) {
    return NextResponse.json(
      { message: "Please fill in every field before submitting the form." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json(
      { message: "Please use a valid work email address." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: `Thanks ${name.split(" ")[0]} — your ${teamSize} team demo request for ${company} is queued.`,
  });
}

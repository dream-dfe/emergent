import sendMail from "@/lib/sendMail";
import { NextRequest, NextResponse } from "next/server";

type SubmittedCourse = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: SubmittedCourse = await req.json();


    const { fname, lname, email, message, phone } = body;

    const res = await sendMail({
      subject: `New Form Submission from ${fname}`,
      to: "dreams@dreamfactoryfoundation.org",
      text: `${fname}  ${lname} with email ${email} and phone number ${phone} sent you a message as follows: ${message}`,
    });

    if (res === "ok") {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    if (res === "err") {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

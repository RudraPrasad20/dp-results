import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { college: string } }
) {
  const { searchParams } = new URL(req.url);
  const semIdParam = searchParams.get("semId");
  const semesterId = parseInt(semIdParam ?? "");

  if (isNaN(semesterId)) {
    return NextResponse.json(
      { message: "Invalid semester ID" },
      { status: 400 }
    );
  }

  const { college } = params;

  const modelMap: Record<string, any> = {
    roland: db.roland,
    vignan: db.vignan,
    kalam: db.kalam,
  };

  const model = modelMap[college];

  if (!model) {
    return NextResponse.json(
      { message: "Invalid college path" },
      { status: 400 }
    );
  }

  try {
    const students = await model.findMany({
      where: {
        semester: semesterId,
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

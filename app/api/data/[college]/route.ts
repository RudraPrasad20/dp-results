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
    ACEANG: db.adarshaCollegeOfEngineeringAnugul,
    ABITCTC: db.ajayBinayInstituteOfTechnologyCuttack,
    AIETBBSR: db.aryanInstituteOfEngineeringAndTechnologyBhubaneswar,
    BIETBLSR: db.balasoreInstituteOfEngineeringAndTechnologyBalasore,
    BIETBDRK: db.bhadrakInstituteOfEngineeringAndTechnologyBhadrak,
    BCEBBSR: db.bhubaneswarCollegeOfEngineeringBhubaneswar,
    BECBBSR: db.bhubaneswarEngineeringCollegeBhubaneswar,
    BIITKHRD: db.bhubaneswarInstituteOfIndustrialTechnologyKhurda,
    BITBBSR: db.bhubaneswarInstituteOfTechnologyBhubaneswar,
    BDIETJSGD: db.blackDimondInstituteOfEngineeringAndTechnolgyJharsuguda,
    CECBBSR: db.capitalEngineeringCollegeBhubaneswar,
    CIPETBBSR: db.centralInstituteOfPetrochemicalsEngineeringAndTechnologyBhubaneswar,
    CUPSBPUTRKLA: db.centreForUgAndPgStudiesBputRourkela,
    CEBBSR: db.collegeOfEngineeringBhubaneswar,
    DCTC: db.driemsCuttack,
    EATMBBSR: db.einsteinAcademyOfTechnologyAndManagementBhubaneswar,
    GECBBRS: db.gandhiEngineeringCollegeBhubaneswar,
    GIETKHRD: db.gandhiInstituteForEducationAndTechnologyKhurda,
    GITABBSR: db.gandhiInstituteForTechnologicalAdvancementBhubaneswar,
    GITBBSR: db.gandhiInstituteForTechnologyBhubaneswar,
    GIACRRGDA: db.gandhiInstituteOfAdvancedComputerAndResearchRayagada,
    GIETBBSR: db.gandhiInstituteOfExcellentTechnocratsBhubaneswar,
    GISATRGDA: db.gandhiInstituteOfScienceAndTechnolgyRaygada,
    GITMBBSR: db.gandhiInstituteOfTechnologyAndManagementBhubaneswar,
    GATEBER: db.gandiAcademyOfTechnologyAndEngineeringBerhampur,
    GCEBER: db.gayatriCollegeOfEngineeringBerhampur





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

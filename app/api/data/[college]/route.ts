import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { college: string } }
) {
  const { searchParams } = new URL(req.url);
  const semIdParam = searchParams.get("semId");
  const semesterId = parseInt(semIdParam ?? "");
  const batch = searchParams.get("batch");
  const year = searchParams.get("year");

  if (isNaN(semesterId) || !batch || !year) {
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
    BIETBLS: db.balasoreInstituteOfEngineeringAndTechnologyBalasore,
    BIETBDRK: db.bhadrakInstituteOfEngineeringAndTechnologyBhadrak,
    BCEBBSR: db.bhubaneswarCollegeOfEngineeringBhubaneswar,
    BECBBSR: db.bhubaneswarEngineeringCollegeBhubaneswar,
    BIITKHR: db.bhubaneswarInstituteOfIndustrialTechnologyKhurda,
    BITBBSR: db.bhubaneswarInstituteOfTechnologyBhubaneswar,
    BDIETJSGD: db.blackDimondInstituteOfEngineeringAndTechnolgyJharsuguda,
    CECBBSR: db.capitalEngineeringCollegeBhubaneswar,
    CIPETBBSR: db.centralInstituteOfPetrochemicalsEngineeringAndTechnologyBhubaneswar,
    CUPSBPUTRKLA: db.centreForUgAndPgStudiesBputRourkela,
    CEBBSR: db.collegeOfEngineeringBhubaneswar,
    DCTC: db.driemsCuttack,
    EATMBBSR: db.einsteinAcademyOfTechnologyAndManagementBhubaneswar,
    GECBBRS: db.gandhiEngineeringCollegeBhubaneswar,
    GIETKHR: db.gandhiInstituteForEducationAndTechnologyKhurda,
    GITABBSR: db.gandhiInstituteForTechnologicalAdvancementBhubaneswar,
    GITBBSR: db.gandhiInstituteForTechnologyBhubaneswar,
    GIACRRGDA: db.gandhiInstituteOfAdvancedComputerAndResearchRayagada,
    GIETBBSR: db.gandhiInstituteOfExcellentTechnocratsBhubaneswar,
    GISATRGDA: db.gandhiInstituteOfScienceAndTechnolgyRaygada,
    GITMBBSR: db.gandhiInstituteOfTechnologyAndManagementBhubaneswar,
    GATEBER: db.gandiAcademyOfTechnologyAndEngineeringBerhampur,
    GCEBER: db.gayatriCollegeOfEngineeringBerhampur,
    GKCETJP: db.gopalKrushnaCollegeOfEngineeringAndTechnologyJaypore,
    GCEKJH: db.governmentCollegeOfEngineeringKeonjhar,
    GKITBBSR: db.gurukulInstituteOfTechnolgyBhubaneswar,
    HTITBBSR: db.hiTechInstituteOfTechnologyBhubaneswar,
    IGITSRG: db.indiraGandhiInstituteOfTechnologySarang,
    ITCEBBSR: db.indotechCollegeOfEngineeringBhubaneswar,
    ICEBBSR: db.indusCollegeOfEngineeringBhubaneswar,
    KITBER: db.kalamInstituteOfTechnologyBerhampur,
    KCETKHR: db.kmbbCollegeOfEngineeringAndTechnologyKhurda,
    KISTBBSR: db.konarkInstituteOfScienceAndTechnologyBhubaneswar,
    KITEKHR: db.kruttikaInsituteOfTechnicalEducationKhurda,
    MPBBSR: db.maharajaPolytechnicBhubaneswar,
    MIETBBSR: db.mahavirInstituteOfEngineeringTechnologyBhubaneswar,
    MITSRRGDA: db.majhigharianiInstituteOfTechnologyAndScienceRayagada,
    MEMSBLS: db.modernEngineeringAndManagementStudiesBalasore,
    MITMBBSR: db.modernInstituteOfTechnologyAndManagementBhubaneswar,
    NITBBSR: db.nalandaInstituteOfTechnologyBhubaneswar,
    NIETBRN: db.nigamInstituteOfEngineeringAndTechnologyBarang,
    NIETBBSR: db.niisInstituteOfEngineeringAndTechnologyBhubaneswar,
    NISTBER: db.nistInstituteOfScienceAndTechnologyBerhampur,
    NMIETBBSR: db.nmInstituteOfEnigneerigAndTechnologyBhubaneswar,
    OCEMBBSR: db.oxfordCollegeOfEngineeringAndManagementBhubaneswar,
    PKACEBGR: db.padmashreeKrutarthaAcharyaCollegeOfEngineeringBargarh,
    PMECBER: db.paralaMaharajaEngineeringCollegeBerhampur,
    PMCAACTC: db.pilooModyCollegeOfArchitectureAbitCuttack,
    RITEBBSR: db.radhakrishnaInstituteOfTechnologyAndEngineeringBhubaneswar,
    RECBBSR: db.rajdhaniEngineeringCollegeBhubaneswar,
    RITMRGDA: db.rayagadaInsituteOfTechnologyAndManagementRayagada,
    RITBER: db.rolandInstituteOfTechnologyBerhampur,
    SCSITMSLG: db.samantaChandraSekharInstituteOfTechnologyAndManagementSimiliguda,
    SMITBER: db.sanjayMemorialInstituteOfTechnologyBerhampur,
    SECBLS: db.satyasaiEngineeringCollegeBalasore,
    SECJPK: db.seemantaEngineeringCollegeJharpokharia,
    SSACTC: db.sgiSchoolOfArchitectureCuttack,
    SITBBSR: db.siliconInstituteOfTechnologyBhubaneswar,
    SITSBL: db.siliconInstituteOfTechnologySambalpur,
    SECKHR: db.sophitoriumEngineeringCollegeKhurda,
    STARKHR: db.spintronicTechnologyAndAdvanceResearchKhurda,
    SCEBLS: db.srinixCollegeOfEngineeringBalasore,
    SITBRN: db.subasInstituteOfTechnologyBarang,
    SERCCTC: db.suddhanandaEngineeringAndResearchCentreCuttack,
    SECSRG: db.sundargarhEngineeringCollegeSundargarh,
    SIETDKL: db.synergyInstituteOfEngineeringAndTechnologyDhenkanal,
    SITPHL: db.synergyInstituteOfTechnologyPahala,
    TITEBBSR: db.templecityInstituteOfTechnologyAndEngineeringBhubaneswar,
    TTSBBSR: db.theTechnoSchoolBhubaneswar,
    TATBBSR: db.tridentAcademyOfTechnologyBhubaneswar,
    VITKHR: db.vedangInstituteOfTechnologyKhurda,
    VITMBER: db.vignanInstituteOfTechnologyAndManagementBerhampur,
    VITBLS: db.vijayanjaliInstituteOfTechnologyBalasore,
    VITBRG: db.vikashInstituteOfTechnologyBargarh,
    VECKHR: db.vitsEngineeringCollegeKhurda
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
        branch:{
          startsWith: batch.slice(0, 6),
        },
        year
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

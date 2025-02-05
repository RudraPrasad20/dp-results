
// import { NextRequest, NextResponse } from "next/server";

// const BACKEND_URL = "http://localhost:8080";

// export default async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     const response = await fetch(BACKEND_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(req.body),
//     });

//     if (!response.ok) {
//         return NextResponse.json("error at response", {status: 500});
//     }

//     const data = await response.json();
//     return NextResponse.json(data, {status: 200});
//   } catch (error) {
//     return NextResponse.json("error occured", {status: 500});
//   }
// }

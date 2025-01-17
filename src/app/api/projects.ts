// import connectToDatabase from "../utils/db";
// import Projects from "../utils/models/projects";

// export async function GET(req: Request) {
//     await connectToDatabase();
//     const projects = await Projects.find({});
//     return new Response(JSON.stringify(projects), {status: 200})
// }

// export async function POST(req: Request) {
//     const body = await req.json();
//     const project = new Projects(body);
//     await project.save();
//     return new Response(JSON.stringify(project), { status: 201 })
// }

// export async function PUT(req: Request) {
//     const body = await req.json();
//     const { _id, ...updates } = body as { _id: string; [key: string]: any};
//     const project = await Projects.findByIdAndUpdate(_id, updates, {
//         new: true,
//     });
//     return new Response(JSON.stringify(project), { status: 200});
// }

// export async function DELETE(req: Request) {
//     const body = await req.json();
//     const { _id } = body as { _id: string };
//     await Projects.findByIdAndDelete(_id);
//     return new Response(null, {status:204})
// }


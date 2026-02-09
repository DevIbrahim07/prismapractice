// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import prisma from "@/lib/prisma";
// import { Link } from "lucide-react";
// import React from "react";
// interface EmployeeIdPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }
// async function EmployeeIdPage({ params }: EmployeeIdPageProps) {
//   const employeeId = await params;
//   const employee = await prisma.employee.findUnique({
//     where: {
//       id: parseInt(employeeId.id),
//     },
//   });
//   return (
//     <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
//       <Card className="w-full max-w-lg shadow-lg rounded-2xl">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">
//             Department Details
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-4">
//           {department ? (
//             <>
//               <div className="space-y-1">
//                 <h3 className="text-xl font-semibold">{department.name}</h3>
//               </div>

//               <div className="border-t pt-4 space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Location</span>
//                   <span className="font-medium">{department.location}</span>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Department ID</span>
//                   <span className="font-medium">{department.id}</span>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <p className="text-sm text-muted-foreground">
//               Department not found.
//             </p>
//           )}
//           {/* back to employees */}
//           <div className="pt-4">
//             <Link
//               href="/departments"
//               className="text-sm text-primary hover:underline"
//             >
//               &larr; Back to Departments
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default EmployeeIdPage;

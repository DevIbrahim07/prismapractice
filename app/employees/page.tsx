import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Link } from "lucide-react";
import React from "react";

async function EmployeePage() {
  const employees = await prisma.employee.findMany();
  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Employess Data</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Explore the various employees within our organization. Click on
            </p>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {employees.map((emp) => (
                <Card
                  key={emp.id}
                  className="p-5 rounded-xl hover:shadow-md transition"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {emp.firstName} {emp.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{emp.email}</p>

                    <Button asChild className="w-full mt-3">
                      <Link href={`/employees/${emp.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default EmployeePage;

// export default DepartmentPage;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

async function DepartmentPage() {
  const department = await prisma.department.findMany();

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Department Overview
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Explore the various departments within our organization. Click on
              "View Details" to learn more about each department.
            </p>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {department.map((dept) => (
                <Card
                  key={dept.id}
                  className="p-5 rounded-xl hover:shadow-md transition"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      📍 {dept.location}
                    </p>

                    <Button asChild className="w-full mt-3">
                      <Link href={`/departments/${dept.id}`}>View Details</Link>
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

export default DepartmentPage;

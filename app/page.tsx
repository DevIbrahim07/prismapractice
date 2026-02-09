import { getAllInstitutes } from "@/lib/institute.service";
import { getAllTeachers } from "@/lib/teacher.service";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const institutes = await getAllInstitutes();
  const teachers = await getAllTeachers();

  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center p-6">
      <Card className="w-full max-w-xl shadow-xl rounded-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-center">
            Institutes & Teachers Portal
          </CardTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Manage institutes and teachers efficiently from one simple
            dashboard.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/institutes">Create Institute</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/teachers">Create Teacher</Link>
            </Button>
          </div>

          <div className="mt-6 flex justify-around border-t pt-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Total Institutes:</span>{" "}
              {institutes.length}
            </div>
            <div>
              <span className="font-medium">Total Teachers:</span>{" "}
              {teachers.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import React from "react";
import { addTeacher } from "@/app/actions/teacher.action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add Teacher</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter teacher details to add a new record.
          </p>
        </CardHeader>

        <CardContent>
          <form action={addTeacher} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Teacher Name"
              required
            />

            <Input type="text" name="subject" placeholder="Subject" required />

            <Button type="submit" className="w-full">
              Add Teacher
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;

import React from "react";
import { addInstitute } from "@/app/actions/institute.actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add Institute</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter institute details to create a new institute.
          </p>
        </CardHeader>

        <CardContent>
          <form action={addInstitute} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Institute Name"
              required
            />

            <Input
              type="text"
              name="location"
              placeholder="Location"
              required
            />

            <Button type="submit" className="w-full">
              Add Institute
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;

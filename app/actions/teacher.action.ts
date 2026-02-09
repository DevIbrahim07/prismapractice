"use server";
import { redirect } from "next/navigation";

export async function addTeacher(data: FormData) {
  const name = data.get("name") as string;
  const subject = data.get("subject") as string;
  // Call the service to add the teacher
  console.log(
    "in the server function  adding   Teacher: " +
      name +
      ", Subject: " +
      subject,
  );
  redirect("/");
}

export async function deleteTeacher(id: number) {
  // call the service to delete the teacher
  console.log(" in the server function  deleting   Teacher with id: " + id);
}

import prisma from "./prisma";
export type Teacher = {
  id: number;
  firstName: string;
  lastName: string;
  subject: string;
};

export async function getAllTeachers(): Promise<Teacher[]> {
  return await prisma.teacher.findMany();
}
export async function addTeacher(
  firstName: string,
  lastName: string, 
    subject: string
) {
  const teacher = await prisma.teacher.create({
    data: {
      firstName,
      lastName,
      subject,
    },
  });
  return teacher;
}
export async function deleteTeacher(id: number) {
  await prisma.teacher.delete({
    where: { id },
  });
}


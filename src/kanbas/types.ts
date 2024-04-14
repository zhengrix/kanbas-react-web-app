type Course = {
  _id: string;
  id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}

type Lesson = {
  id: string;
  name: string;
  description: string;
  module: string;
};

type Module = {
  _id: string;
  id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
};

export type { Course, Module, Lesson };
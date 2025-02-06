export type Event = {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image: string;
};

export type Image = {
  path: string;
  caption: string;
};

export type CustomErrorObject = {
  title: string;
  message: string;
  status: number;
};

export type Data = {
  data: Event;
  image: string;
};

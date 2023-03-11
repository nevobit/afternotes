export interface Note {
  uuid: string;
  title: string;
  user: string;
  tags: string[];
  createdBy: string;
  content: string;
  folder: string;
}

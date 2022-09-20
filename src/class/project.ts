// Project type
export enum ProjectType {
  ACTIVE,
  FINISHED,
}

// Project Class
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public type: ProjectType
  ) {}
}

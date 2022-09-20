import {Project, ProjectType} from "../class/project.js";
import {ListenerFn, State} from "./state.js";


// Project State Class
export class ProjectState extends State<Project> {
  private projectList: Project[] = [];
  static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  callListener(project: Project) {
    this.projectList.push(project);
    this.updateListeners();
  }

  addListener(listener: ListenerFn<Project>) {
    this.listeners.push(listener);
  }

  updateListeners() {
    for (const listener of this.listeners) {
      listener(this.projectList.slice());
    }
  }

  moveProject(projectId: string, type: ProjectType) {
    const prj = this.projectList.find((project) => project.id === projectId);
    if (prj && prj.type !== type) {
      prj.type = type;
      this.updateListeners();
    }
  }
}

export const projectState = ProjectState.getInstance();

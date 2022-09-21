import {DragTarget} from "../class/drag-drop";
import {Project, ProjectType} from "../class/project";
import {ProjectItem} from "../class/project-item";
import {Autobind} from "../decorators/autobind";
import {projectState} from "../states/project-state";
import {Content} from "./base-class";

// Project List Class
export class ProjectList
  extends Content<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  receivedList: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("app", "project-list", false, `${type}-projects`);

    this.renderContents();
    this.configure();
  }

  @Autobind
  dragOver(event: DragEvent): void {
    event?.preventDefault();
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dragLeave(event: DragEvent): void {
    console.log(event);
    if (event.relatedTarget === document.getElementById("app")) {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.remove("droppable");
    }
  }

  @Autobind
  drop(event: DragEvent): void {
    const prjId = event.dataTransfer?.getData("text/plain")!;

    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectType.ACTIVE : ProjectType.FINISHED
    );
  }

  configure(): void {
    projectState.addListener(this.renderList);
    this.element.addEventListener("dragover", this.dragOver);
    this.element.addEventListener("dragleave", this.dragLeave);
    this.element.addEventListener("drop", this.drop);
  }

  renderContents() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()} PROJECTS`;
  }

  @Autobind
  private renderList(projects: Project[]) {
    const listEl = document.getElementById(
      `${this.type}-project-list`
    ) as HTMLUListElement;
    listEl.innerHTML = "";

    for (const project of projects) {
      if (this.type === "active" && project.type === ProjectType.ACTIVE) {
        new ProjectItem(listEl.id, project);
      }

      if (this.type === "finished" && project.type === ProjectType.FINISHED) {
        new ProjectItem(listEl.id, project);
      }
    }
  }
}

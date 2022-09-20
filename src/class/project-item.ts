import {Content} from "../components/base-class.js";
import {Autobind} from "../decorators/autobind.js";
import {Dragable} from "./drag-drop.js";
import {Project} from "./project.js";

// Project Item class
export class ProjectItem
  extends Content<HTMLUListElement, HTMLLIElement>
  implements Dragable
{
  get person() {
    if (this.project.people === 1) {
      return "1 person";
    }
    return `${this.project.people} persons`;
  }

  constructor(ulId: string, private project: Project) {
    super(ulId, "single-project", false, project.id);
    this.renderContents();
    this.configure();
  }

  @Autobind
  dragStart(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.dropEffect = "move";
  }

  @Autobind
  dragEnd(event: DragEvent): void {
    console.log(event);
  }

  renderContents(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.person + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  configure(): void {
    this.element.addEventListener("dragstart", this.dragStart);
    this.element.addEventListener("dragend", this.dragEnd);
  }
}

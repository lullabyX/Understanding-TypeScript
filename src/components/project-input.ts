import { Project, ProjectType } from "../class/project";
import { Autobind } from "../decorators/autobind";
import { projectState } from "../states/project-state";
import { ValidateObj, Validator } from "../utils/validation";
import { Content } from "./base-class";

// Project Input Class
export class ProjectInput extends Content<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("app", "project-input", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.renderContents();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContents(): void {}

  private gatherUserInput() {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = +this.peopleInputElement.value;

    const titleValidation: ValidateObj = {
      value: title,
      required: true,
      maxLength: 32,
    };
    const descriptionValidation: ValidateObj = {
      value: description,
      required: true,
      minLength: 5,
    };
    const peopleValidation: ValidateObj = {
      value: people,
      required: true,
      min: 1,
    };

    if (
      Validator(titleValidation) &&
      Validator(descriptionValidation) &&
      Validator(peopleValidation)
    ) {
      console.log(title, description, people);
      const project = new Project(
        Math.random().toString(),
        title,
        description,
        people,
        ProjectType.ACTIVE
      );
      projectState.callListener(project);
    } else {
      alert("Validation Failed");
    }
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    this.gatherUserInput();
  }
}

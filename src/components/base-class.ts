// Content Class
export abstract class Content<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    hostId: string,
    templateId: string,
    addAfterBegin: boolean,
    elementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostId) as T;

    const insertNode = document.importNode(this.templateElement.content, true);
    this.element = insertNode.firstElementChild as U;
    if (elementId) {
      this.element.setAttribute("id", elementId);
    }

    this.attach(addAfterBegin);
  }

  abstract configure(): void;
  abstract renderContents(): void;

  private attach(addAfterBegin: boolean) {
    this.hostElement.insertAdjacentElement(
      addAfterBegin ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

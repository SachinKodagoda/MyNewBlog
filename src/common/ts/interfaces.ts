// This will receive an object with target field that is of type HTMLInputElement
export interface IHtmlSelectedElement {
  target: HTMLSelectElement;
}

// following is for event where target is needed
export interface IHtmlInputElement {
  target: HTMLInputElement;
}

export interface IHTMLFormElement {
  current: HTMLFormElement;
}

export interface IFile {
  preview: File;
}

export interface IHTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

// globally add an attribute to svg elements
declare module 'react' {
  interface SVGAttributes<T> {
    slot?: string;
  }
}

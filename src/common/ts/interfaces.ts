/* eslint-disable @typescript-eslint/no-unused-vars */

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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface SVGAttributes<T> {
    slot?: string;
  }
}

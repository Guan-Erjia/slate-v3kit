/// <reference types="vite/client" />
import { Descendant, BaseEditor, BaseRange } from "slate-vue3/core";
import { DOMEditor } from "slate-vue3/dom";

export type BlockQuoteElement = {
  type: "blockquote";
  align?: string;
  children: Descendant[];
};

export type BlockElement = {
  type: "block";
  align?: string;
  children: Descendant[];
};

export type BulletedListElement = {
  type: "bulleted-list";
  align?: string;
  children: Descendant[];
};

export type NumberedListElement = {
  type: "numbered-list";
  align?: string;
  children: Descendant[];
};

export type CheckListItemElement = {
  type: "check-list-item";
  checked: boolean;
  children: Descendant[];
};

export type EditableVoidElement = {
  type: "editable-void";
  children: EmptyText[];
};

export type HeadingOneElement = {
  type: "h1";
  align?: string;
  children: Descendant[];
};

export type HeadingTwoElement = {
  type: "h2";
  align?: string;
  children: Descendant[];
};

export type HeadingThreeElement = {
  type: "h3";
  align?: string;
  children: Descendant[];
};

export type HeadingFourElement = {
  type: "h4";
  align?: string;
  children: Descendant[];
};

export type HeadingFiveElement = {
  type: "h5";
  align?: string;
  children: Descendant[];
};

export type HeadingSixElement = {
  type: "h6";
  align?: string;
  children: Descendant[];
};

export type ImageElement = {
  type: "img";
  url: string;
  children: EmptyText[];
};

export type LinkElement = { type: "a"; url: string; children: Descendant[] };

export type ButtonElement = { type: "button"; children: Descendant[] };

export type BadgeElement = { type: "badge"; children: Descendant[] };

export type ListItemElement = { type: "list-item"; children: Descendant[] };

export type MentionElement = {
  type: "mention";
  value: string;
  children: CustomText[];
};

export type ParagraphElement = {
  type: "p";
  align?: string;
  children: Descendant[];
};

export type TableElement = { type: "table"; children: any[] };

export type TableCellElement = { type: "td"; children: CustomText[] };

export type TableRowElement = { type: "tr"; children: any[] };
export type TableHeadElement = { type: "th"; children: any[] };

export type TitleElement = { type: "title"; children: Descendant[] };

export type VideoElement = {
  type: "video";
  url: string;
  children: EmptyText[];
};

export type AudioElement = {
  type: "audio";
  url: string;
  children: EmptyText[];
};

export type FileElement = {
  children: EmptyText[];
  isUpload: boolean;
  name: string;
  type: "file";
  url: string;
};

export type CodeBlockElement = {
  type: "code-block";
  language: string;
  children: Descendant[];
};

export type CodeElement = {
  type: "code";
  language: string;
  lang: string;
  children: Descendant[];
};

export type CodeLineElement = {
  type: "code-line";
  children: Descendant[];
};

export type CustomElement =
  | BlockQuoteElement
  | BlockElement
  | BulletedListElement
  | NumberedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement
  | HeadingFourElement
  | HeadingFiveElement
  | HeadingSixElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | BadgeElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
  | TableElement
  | TableRowElement
  | TableCellElement
  | TableHeadElement
  | TitleElement
  | VideoElement
  | CodeBlockElement
  | CodeElement
  | CodeLineElement
  | FileElement
  | AudioElement;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};

export type EmptyText = {
  text: string;
};

export type CustomEditor = BaseEditor & DOMEditor;

declare module "slate-vue3/core" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }
}

declare module "*.md" {
  const src: string;
  export default src;
}

export interface TemplateProps {
  config: any;
}

export enum ElementType {
  AVATAR = 'avatar',
  IMAGE = 'image',
  NAME = 'name',
  TITLE = 'title',
  FIELD = 'field',
  SOCIAL = 'social',
}

export enum ContentType {
  TEXT = 'Text',
  LINK = 'Link',
  EMAIL = 'Email',
}

export enum IconDisplayType {
  FILL = 'Fill',
  LINE = 'Line',
  OUTLINE = 'Outline',
}

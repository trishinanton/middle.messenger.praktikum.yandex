export interface InputFormType {
  type?: string
  class?: string
  name?: string
  placeholder?: string
  events?: Record<string, Function>
  eventInterception?: boolean
}

export interface TitlePageType {
  title: string
}

export interface LinkType {
  link: string
  title?: string
  id?: string
  events?: Record<string, Function>
}

export interface ButtonType {
  type?: string
  title?: string
  id?: string
  events?: Record<string, Function>
}

export interface ChatType {
  title: string
  wrapperClassName?: string
  events?: Record<string, Function>
}

export interface DescriptionType {
  text: string
}

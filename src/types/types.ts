export type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export enum projectCategory {
  Personal, Work
}
export interface Project {
  img: string,
  title:string,
  description: string,
  webSrc: string,
  category: projectCategory,
  gitHubSrc?: string
}

export enum ProjectFilters {
  All, Personal, Work
}
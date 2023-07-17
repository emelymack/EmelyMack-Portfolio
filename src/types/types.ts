export type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export interface Project {
  img: string,
  title:string,
  description: string,
  webSrc: string,
  gitHubSrc?: string
}
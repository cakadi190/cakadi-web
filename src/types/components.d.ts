import { ReactNode } from "react";

export type BaseComponent<T = {}> = T & {
  children?: ReactNode
}
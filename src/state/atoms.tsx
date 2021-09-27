import { atom } from "recoil";
import { Element } from "../types";


export const todoItemsState = atom<Element[]>({
  key: 'todoItemsState',
  default: [
      {done: false, id:12121, label:"Study Recoil JS"}
  ]
})
export const filterState = atom<string>({
  key: 'filterState',
  default: 'all'
})
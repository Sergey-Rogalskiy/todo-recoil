import { selector } from "recoil";
import { todoItemsState, filterState } from "./atoms";
import { Element } from "../types";

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(filterState);
    const todoList = get(todoItemsState);

    switch (filter) {
      case 'all':
          return todoList;
      case 'current':
          return todoList.filter((item: Element) => !item.done);
      case 'done':
          return todoList.filter((item: Element) => item.done);
      default:
          return todoList;
    }
  },
});
export const doneCountState = selector({
    key: 'doneCountState',
    get: ({get}) => {
      const todoList = get(todoItemsState);
      return todoList && todoList.filter((el: Element) => !el.done).length;
    },
  });
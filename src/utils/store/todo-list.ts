import {
  createApi,
  createEvent,
  createStore,
  EventCallable,
  sample,
  combine,
} from "effector";
import { FilterMode, TodoItemList } from "../types";

const TODO_LS_KEY = "todo_list";

const loadTodos = (): TodoItemList => {
  try {
    const raw = localStorage.getItem(TODO_LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveTodos = (todos: TodoItemList) => {
  localStorage.setItem(TODO_LS_KEY, JSON.stringify(todos));
};

// { id: string, value: string, status: 'active' | 'completed' }
export const $todoList = createStore<TodoItemList>(loadTodos());

$todoList.updates.watch(saveTodos);

export const todoListApi = createApi($todoList, {
  deleteItemEv: (list, id: string) =>
    list.filter(item => item.id !== id),

  createItemEv: (list, value: string) => [
    {
      id: crypto.randomUUID(),
      value,
      status: "active",
    },
    ...list,
  ],

  changedStatusEv: (list, id: string) =>
    list.map(item =>
      item.id === id
        ? {
            ...item,
            status:
              item.status === "active"
                ? "completed"
                : "active",
          }
        : item
    ),

  clearCompletedEv: list =>
    list.filter(item => item.status === "active"),
});

export interface TodoListApiI {
  deleteItemEv: EventCallable<string>;
  createItemEv: EventCallable<string>;
  changedStatusEv: EventCallable<string>;
  clearCompletedEv: EventCallable<void>;
}


export const $activeFilterMode = createStore<FilterMode>("all");

export const setActiveFilterModeEv = createEvent<FilterMode>();

sample({
  clock: setActiveFilterModeEv,
  target: $activeFilterMode,
});

export const $filteredTodoList = combine(
  $todoList,
  $activeFilterMode,
  (list, filter) => {
    switch (filter) {
      case "active":
        return list.filter(
          item => item.status === "active"
        );
      case "completed":
        return list.filter(
          item => item.status === "completed"
        );
      default:
        return list;
    }
  }
);

import { createApi, createEvent, createStore, EventCallable, sample } from "effector";
import { ThemeMode, TodoItemList } from "./types";

import { todoListMock } from "./mocks";

export const $themeMode = createStore<ThemeMode>('light')

export const changeThemeModeEv = createEvent()

sample({
    clock: changeThemeModeEv,
    source: $themeMode,
    fn: (theme) => theme === 'light' ? 'dark' : 'light',
    target: $themeMode,
})


export const $todoList = createStore<TodoItemList>(todoListMock);

export const todoListApi = createApi($todoList, {
    deleteItemEv: (list, id: string) => list.filter(i => i.id !== id),
    createItemEv: (list, value: string) => [ {
        value: value,
        id: value,
        status: 'active'
    }, ...list],
    changedStatusEv: (list, id: string) => list.map(item => 
        item.id === id ? 
        { 
             ...item, 
             status: item.status === 'active' ? 'done' : 'active'
        } : item
    )
})

export interface TodoListApiI {
    deleteItemEv: EventCallable<string>;
    createItemEv: EventCallable<string>;
    changedStatusEv: EventCallable<string>;
}
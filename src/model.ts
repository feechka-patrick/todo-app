import { createApi, createEvent, createStore, EventCallable, sample, split } from "effector";
import { FilterMode, ThemeMode, TodoItemList } from "./types";

import { todoListMock } from "./mocks";

// Темная и светлая тема приложения
export const $themeMode = createStore<ThemeMode>('light')

export const changeThemeModeEv = createEvent()

sample({
    clock: changeThemeModeEv,
    source: $themeMode,
    fn: (theme) => theme === 'light' ? 'dark' : 'light',
    target: $themeMode,
})

// Стор, хранит в себе все созданные задачи в виде массива объектов
// { id: string, value: string, status: 'active' | 'completed' }
export const $todoList = createStore<TodoItemList>(todoListMock);

export const todoListApi = createApi($todoList, {
    deleteItemEv: (list, id: string) => list.filter(item => item.id !== id),
    createItemEv: (list, value: string) => [ {
        value: value,
        id: value,
        status: 'active'
    }, ...list],
    changedStatusEv: (list, id: string) => list.map(item => 
        item.id === id ? 
        { 
             ...item, 
             status: item.status === 'active' ? 'completed' : 'active'
        } : item
    ),
    clearCompletedEv: (list) => list.filter(item => item.status ==='active')
})

export interface TodoListApiI {
    deleteItemEv: EventCallable<string>;
    createItemEv: EventCallable<string>;
    changedStatusEv: EventCallable<string>;
    clearCompletedEv: EventCallable<{}>;
}

// Фильтрация массива $todoList
export const $filteredTodoList = createStore<TodoItemList>(todoListMock)
// Активный фильтр
export const $activeFilterMode = createStore<FilterMode>('all');

export const setActiveFilterModeEv = createEvent<FilterMode>();
export const allFilteredEv = createEvent();
export const activeFilteredEv = createEvent();
export const completedFilteredEv = createEvent();

sample({
    clock: setActiveFilterModeEv,
    target: $activeFilterMode
})

split({
    clock: [$todoList, $activeFilterMode],
    source: $activeFilterMode,
    match: (filter) => filter,
    cases: {
        'all': allFilteredEv,
        'active': activeFilteredEv,
        'completed': completedFilteredEv
    }
})

sample({
    clock: allFilteredEv,
    source: $todoList,
    target: $filteredTodoList
})

sample({
    clock: activeFilteredEv,
    source: $todoList,
    fn: (list) => list.filter(item => item.status === 'active'),
    target: $filteredTodoList
})

sample({
    clock: completedFilteredEv,
    source: $todoList,
    fn: (list) => list.filter(item => item.status === 'completed'),
    target: $filteredTodoList
})


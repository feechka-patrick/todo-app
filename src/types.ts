
export type ThemeMode = 'light' | 'dark';
type TodoStatus = 'done' | 'active';

interface TodoItem {
    id: string,
    value: string,
    status: TodoStatus
}

export type TodoItemList = TodoItem[]
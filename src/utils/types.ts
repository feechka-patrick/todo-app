
export type ThemeMode = 'light' | 'dark';
type TodoStatus = 'completed' | 'active';

interface TodoItem {
    id: string,
    value: string,
    status: TodoStatus
}

export type TodoItemList = TodoItem[]

export type FilterMode = 'all' | 'active' | 'completed'
export interface TodosProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: { id: string; title: string; completed: boolean }[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; title: string; completed: boolean }[]>
  >;
  editTodo: { id: string; title: string; completed: boolean } | null;
  setEditTodo: React.Dispatch<
    React.SetStateAction<null | {
      id: string;
      title: string;
      completed: boolean;
    }>
  >;
}

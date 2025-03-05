import { Suspense } from "react";

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();

//   return data;
// };

// const Todos = async () => {
//   const todos: Todo[] = await getData();
//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           {todo.id}: {todo.title}
//         </div>
//       ))}
//     </>
//   );
// };

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <h1 className="text-2xl font-bold animate-pulse">Loading...</h1>
    </div>
  );
};

const Home = async () => {
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Loading />}>{/* <Todos /> */}</Suspense>
    </div>
  );
};

export default Home;

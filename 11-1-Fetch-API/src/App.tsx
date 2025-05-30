import { useState, useEffect } from "react";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchTodos = async () => {
      setIsLoading(true);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Failed to fetch posts");

        const resData: post[] = await res.json();

        setPosts(resData);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("Failed to fetch posts");
      }
    };

    handleFetchTodos();
    setIsLoading(false);
  }, []);

  const handleRemovePost = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleEditPost = (id: number) => {
    const title = prompt("Enter new title");
    const body = prompt("Enter new body");

    if (title && body) {
      setPosts((prev) =>
        prev.map((post) => {
          if (post.id === id) {
            return { ...post, title, body };
          }
          return post;
        })
      );
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {/* <div className="my-8 border-2 p-2 m-5">
        <div className="flex flex-row gap-10">
          <label htmlFor="">Nhập mã người dùng:</label>
          <input type="text" name="" id="" className="border-2" />
        </div>
        <div className="flex flex-row gap-10">
          <label htmlFor="">Nhập mã phiếu:</label>
          <input type="text" name="" id="" className="border-2" />
        </div>
        <div className="flex flex-row gap-10">
          <label htmlFor="">Tựa đề:</label>
          <input type="text" name="" id="" className="border-2" />
        </div>
        <div className="flex flex-row gap-10">
          <label htmlFor="">Nhập nội dung:</label>
          <textarea name="" id=""></textarea>
        </div>
      </div> */}
      {isLoading && <p>Loading...</p>}
      {!isLoading && posts.length === 0 && <p>No Posts found</p>}
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => (
          <div className="border-2 p-2 border-gray-500 m-3 shadow-lg bg-blue-400">
            <h1 className="text-2xl font-bold text-white">{post.title}</h1>
            <div className="flex flex-row gap-10 mb-8">
              <p>Bởi người dùng: {post.userId}</p>
              <p>Mã phiếu: {post.id}</p>
            </div>
            <p className="max-w-4xl text-lg"> {post.body}</p>
            <div className="flex flex-row gap-10">
              <button
                onClick={() => handleRemovePost(post.id)}
                className="py-2 px-8 bg-red-500 rounded-lg my-4 text-white hover:opacity-80 hover:-translate-y-0.5 "
              >
                Xóa
              </button>
              <button
                onClick={() => handleEditPost(post.id)}
                className="py-2 px-8 bg-blue-500 rounded-lg my-4 text-white hover:opacity-80 hover:-translate-y-0.5 "
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default App;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface EdgePost {
  id: number;
  title: string;
}

async function getEdgePosts(): Promise<EdgePost[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);
    const data: Post[] = await response.json();

    if (!data || data.length === 0) return [];

   const selection = [data[0], data[data.length - 1]];

    return selection.map((post: Post) => ({
      id: post.id,
      title: post.title
    }));

  } catch (error) {
    
    throw error;
  }
}
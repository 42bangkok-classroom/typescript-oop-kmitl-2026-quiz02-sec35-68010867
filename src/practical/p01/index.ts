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

export async function getEdgePosts(): Promise<EdgePost[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Post[] = await response.json();

    if (data.length === 0) {
      return [];
    }

    
    const first = data[0];
    const last = data[data.length - 1];

    
    return [first, last].map(({ id, title }) => ({
      id,
      title,
    }));
  } catch (error) {
    

    throw error;
  }
}
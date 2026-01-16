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
      throw new Error('Network response was not ok');
    }

    const data: Post[] = await response.json();

    
    if (data.length === 0) return [];

    
    const selection = [data[0], data[data.length - 1]];

    
    return selection.map((item: Post) => ({
      id: item.id,
      title: item.title,
    }));
  } catch (error) {
    
    throw error;
  }
}
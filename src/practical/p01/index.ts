import axios from 'axios';

interface Post {
  id: number;
  title: string;
}


export async function getEdgePosts(): Promise<Post[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const { data } = await axios.get<Post[]>(url);

    if (data.length === 0) {
      return [];
    }

    const firstPost = data[0];
    const lastPost = data[data.length - 1];

   return [firstPost, lastPost].map(({ id, title }) => ({
      id,
      title,
    }));
    
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}
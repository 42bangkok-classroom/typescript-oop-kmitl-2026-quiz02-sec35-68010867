
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserPost {
  id: number;
  title: string;
}

export async function getPostsByUser(userId: number): Promise<UserPost[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const { data } = await axios.get<Post[]>(url);

   return data
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({
        id,
        title,
      }));
      
  } catch (error) {
   
    throw new Error(`Could not fetch posts for user: ${userId}`);
  }
}
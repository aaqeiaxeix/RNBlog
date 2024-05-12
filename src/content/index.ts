import { Post } from '@/src/types/post';

export const posts: Record<string, Post> = {
  post1: require('@/src/content/post1').default,
  post2: require('@/src/content/post2').default,
  post3: require('@/src/content/post3').default,
};


export default posts;
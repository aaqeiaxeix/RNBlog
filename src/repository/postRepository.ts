
import posts from '@/src/content';
import { FlatList, View } from 'react-native';



export const getAllPosts = () => {

  return   Object.values(posts);


 

};

export const getPost = (slug: string) => {
  return posts[slug];
  
};

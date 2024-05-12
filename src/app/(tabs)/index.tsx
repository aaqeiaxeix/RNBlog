import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllPosts } from '@/src/repository/postRepository';
import { useState } from 'react';
import { Link } from 'expo-router';
import PostListItem from '@/src/components/postListItem'

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={posts}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => <PostListItem post={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    
    
  },
  main: {
    

    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
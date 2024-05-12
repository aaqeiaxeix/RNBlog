import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
          renderItem={({ item }) => (<Link style={styles.title} href={`/${item.slug}`}>{item.title}</Link>)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:"red"
    
    
  },
  main: {
    flex:1,

    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "black"
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
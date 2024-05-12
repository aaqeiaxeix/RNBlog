import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getPost, getAllPosts } from '@/src/repository/postRepository';
import Markdown from 'react-native-markdown-display';
import Head from 'expo-router/head';
import { ORIGIN } from '@/src/config';

export async function generateStaticParams(): Promise<
    Record<string, string>[]
> {
    const posts = getAllPosts();

    return posts.map((post) => ({ slug: post.slug }));
}

const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams();
    const [post, setPost] = useState(getPost(slug));

    if (!post) {
        return <Text>Post not found</Text>;
    }

    return (
        <ScrollView

            style={{

                flex: 1,
                backgroundColor: 'white'


            }} contentContainerStyle={{
                marginHorizontal: "auto",
                width: '100%',
                maxWidth: 960,
                padding: 20
            }}>


            <Text style={{ fontSize: 30, marginBottom: 20 }}>{post.title}</Text>
            <Markdown>{post.content}</Markdown>


        </ScrollView>
    );
};

export default PostDetailsPage;
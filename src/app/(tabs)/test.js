import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

const CategoryButton = styled.TouchableOpacity`
  background-color: ${({ selected }) => (selected ? "#007bff" : "#ddd")};
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
`;

const CategoryButtonText = styled.Text`
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  font-size: 16px;
`;

const AddBlogPost = () => {
  const [blogPost, setBlogPost] = useState({
    title: "",
    description: "",
    categories: [],
    date: new Date(),
    author: "",
  });

  const handleInputChange = (name, value) => {
    setBlogPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category) => {
    const index = blogPost.categories.indexOf(category);
    if (index !== -1) {
      setBlogPost((prevState) => ({
        ...prevState,
        categories: prevState.categories.filter((cat) => cat !== category),
      }));
    } else {
      setBlogPost((prevState) => ({
        ...prevState,
        categories: [...prevState.categories, category],
      }));
    }
  };

  const handleSubmit = () => {
    // Add your logic here to send the blog post data to your backend or handle it accordingly
    console.log("Blog post submitted:", blogPost);
    // Optionally, you can clear the form after submission
    setBlogPost({
      title: "",
      description: "",
      categories: [],
      date: new Date(),
      author: "",
    });
  };

  return (
    <Container>
      <Input
        placeholder="Title"
        value={blogPost.title}
        onChangeText={(text) => handleInputChange("title", text)}
      />
      <Input
        placeholder="Description"
        multiline
        value={blogPost.description}
        onChangeText={(text) => handleInputChange("description", text)}
      />
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <CategoryButton
          selected={blogPost.categories.includes("Technology")}
          onPress={() => handleCategoryChange("Technology")}
        >
          <CategoryButtonText
            selected={blogPost.categories.includes("Technology")}
          >
            Technology
          </CategoryButtonText>
        </CategoryButton>
        <CategoryButton
          selected={blogPost.categories.includes("Travel")}
          onPress={() => handleCategoryChange("Travel")}
        >
          <CategoryButtonText selected={blogPost.categories.includes("Travel")}>
            Travel
          </CategoryButtonText>
        </CategoryButton>
        {/* Add more categories as needed */}
      </View>
      <Input
        placeholder="Author"
        value={blogPost.author}
        onChangeText={(text) => handleInputChange("author", text)}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </Container>
  );
};

export default AddBlogPost;

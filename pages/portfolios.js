import React from "react"
import axios from 'axios';
import BaseLayout from "../components/layouts/BaseLayout";

export default class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    } catch(e) {
      console.error(e);
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map(post => <li key={post.id}>{post.id}</li>)
  }

  render() {
    const { appProps } = this.props;
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolio Page</h1>
        <h2>{appProps}</h2>
        <ul>
          {this.renderPosts(posts)}
        </ul>
      </BaseLayout>
    )
  }
}


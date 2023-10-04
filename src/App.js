import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      editingPostId: null,
    };
  }

  handleEdit = (postId) => {
    this.setState({ editingPostId: postId });
  };

  handleDelete = (postId) => {
    const updatedPosts = this.state.posts.filter((post) => post.id !== postId);
    this.setState({
      posts: updatedPosts,
      editingPostId: null,
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    const { posts, editingPostId } = this.state;

    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {editingPostId === post.id ? (
              // Render Edit Form
              <div>
                <input type="text" value={post.title} />
                <textarea value={post.body} />
                <button>Edit</button>
              </div>
            ) : (
              // Render Post Details
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => this.handleEdit(post.id)}>Edit</button>
                <button onClick={() => this.handleDelete(post.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;

import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tags: '',
    };
  }

  submitHandler = event => {
    event.preventDefault();

    const {title, description, tags} = this.state;
    if (!title.trim()) {
      return
    };

    const newPost = {
      title, description, tags, id: Date.now().toString()
    };

    console.log(newPost);
    this.props.createPost(newPost);
    this.setState({title: '', description: '', tags: ''});
  }

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}));
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Заголовок поста</label>
          <input 
            type='text' 
            className='form-control' 
            id='title' 
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
          <label htmlFor='title'>Краткое описание</label>
          <input 
            type='text' 
            className='form-control' 
            id='description' 
            value={this.state.description}
            name='description'
            onChange={this.changeInputHandler}
          />
          {/* <label htmlFor='title'>Теги</label>
          <input 
            type='text' 
            className='form-control' 
            id='tags' 
            value={this.state.tags}
            name='tags'
            onChange={this.changeInputHandler}
          /> */}
        </div>
        <button className='btn btn-success' type='submit'>Создать</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);
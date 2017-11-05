import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';


class PostNew extends Component {
  renderField(field){
    return(
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />

        <div className='error'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
        {/* this is an error */}
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push("/")
    });
  }

  render() {
    const { handleSubmit}  = this.props

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
};

function validate(values) {
  const errors = {}
  // validate inputs from the values object
  if (!values.title || values.length < 3) {
    errors.title = 'Enter a title that is at least three characters!'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }
  // if errors is empty then the form is okay to submit
  // if errors has any properties redux forms assumes form is invalid
  return errors
}

export default reduxForm({
  form:'PostsNewForm',
  validate: validate
})(
  connect(null,{createPost})(PostNew)
);

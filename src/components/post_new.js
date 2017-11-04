import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';


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
      </div>
    )
  }

  render() {
    return (
      <form>
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
})(PostNew);

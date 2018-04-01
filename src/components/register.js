import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Register extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <field.input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                ></field.input>
            </div>
        );
    }

    field(input, type, label, name) {
        return (
            <Field
                input={input}
                type={type}
                label={label}
                name={name}
                component={this.renderField}
            />
        )
    }

    onSubmit(values) {
        //action to handle registration
        console.log(res.locals.currentUser);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {this.field('input', 'text', 'username', 'username')}
                {this.field('input', 'text', 'email', 'email')}
                {this.field('input', 'password', 'password', 'password')}
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'RegisterForm',
})(Register);
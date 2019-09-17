import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import useForm from "../../hooks/useForm";

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const SignInFormBase = props => {
  const [formState, setFormState, onChange] = useForm({
    email: "",
    password: "",
    error: null
  });

  const { email, password, error } = formState;

  const isInvalid = password === "" || email === "";

  const onSubmit = event => {
    props.firebase
      .doSignInWithEmailAndPassword(formState.email, formState.password)
      .then(authUser => {
        setFormState({
          email: "",
          password: "",
          error: null
        });
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setFormState({ ...formState, error: error });
      });
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };

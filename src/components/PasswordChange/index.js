import React from "react";
import { withFirebase } from "../Firebase";
import useForm from "../../hooks/useForm";

const PasswordChangeForm = props => {
  const [formState, setFormState, onChange] = useForm({
    passwordOne: "",
    passwordTwo: "",
    error: null
  });
  const { passwordOne, passwordTwo, error } = formState;
  const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

  const onSubmit = event => {
    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setFormState({ passwordOne: "", passwordTwo: "", error: null });
      })
      .catch(error => {
        setFormState({ ...formState, error: error });
      });
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};
export default withFirebase(PasswordChangeForm);

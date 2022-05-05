import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { selectCurrentUser } from "redux/user/user.selectors";
import {
  updateUserDetail,
  updateUserEmail,
  updateUserPassword,
} from "../../redux/user/user.actions";
import { verifyUserCredentials } from "../../firebase/firebase.utils";
import EditNameForm from "./edit-name.component";
import EditEmailForm from "./edit-email.component";
import EditPasswordForm from "./edit-password.component";

const EditAccountForm = ({ data }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const conditionalValidation = () => {
    if (data === "name") {
      return {
        name: Yup.string()
          .max(20, "Max character limit is 20 characters")
          .required("Enter a name"),
      };
    }

    if (data === "email") {
      return {
        email: Yup.string()
          .email("Enter a valid email address")
          .required("Enter an email"),
        emailVerify: Yup.string().oneOf(
          [Yup.ref("email"), null],
          "Emails must match"
        ),
        password: Yup.string().min(8, null).required("Enter a password"),
      };
    }

    if (data === "password") {
      return {
        currentPassword: Yup.string().min(8, null).required("Enter a password"),
        newPassword: Yup.string().min(8, null).required("Enter a password"),
        reEnterPassword: Yup.string().oneOf(
          [Yup.ref("newPassword"), null],
          "Passwords must match"
        ),
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      name: currentUser.displayName,
      oldEmail: currentUser.email,
      email: "",
      emailVerify: "",
      password: "",
      currentPassword: "",
      newPassword: "",
      reEnterPassword: "",
    },
    validationSchema: Yup.object(conditionalValidation()),
    onSubmit: async ({
      name,
      email,
      password,
      currentPassword,
      newPassword,
    }) => {
      if (data === "name") {
        currentUser.displayName = name;
        dispatch(updateUserDetail(currentUser, history));
      }
      if (data === "email") {
        currentUser.email = email;
        const checkCredentials = await verifyUserCredentials(password);

        checkCredentials.success
          ? dispatch(updateUserEmail(currentUser, history))
          : toast.error("Invalid password!");
      }
      if (data === "password") {
        currentUser["newPassword"] = newPassword;
        const checkCredentials = await verifyUserCredentials(currentPassword);

        checkCredentials.success
          ? dispatch(updateUserPassword(currentUser, history))
          : toast.error("Invalid password!");
      }
    },
  });

  if (data === "name") return <EditNameForm formik={formik} />;

  if (data === "email")
    return <EditEmailForm formik={formik} currentUser={currentUser} />;

  if (data === "password") return <EditPasswordForm formik={formik} />;
};

export default EditAccountForm;

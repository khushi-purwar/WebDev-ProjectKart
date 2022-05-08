import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast, Slide } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/header/header.component";
import Footer from "./components/layout/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import AccountsPage from "./pages/account/account.component";
import EditAccount from "./components/edit-account/edit-account.component";
import ResetPassword from "./components/reset-password/reset-password.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const RegistrationPage = lazy(() =>
  import("./pages/registration/registration.component")
);
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const SignInPage = lazy(() => import("./pages/sign-in/sign-in.component"));
const WatchlistPage = lazy(() =>
  import("./pages/watchlist/watchlist.component")
);
const NotFoundPage = lazy(() =>
  import("./pages/not-found/not-found-page.component")
);
const ErrorBoundary = lazy(() =>
  import("./components/error-boundary/error-boundary.component")
);

toast.configure({
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
});

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/register/sign-in"
              render={() =>
                currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <RegistrationPage />
                )
              }
            />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <SignInPage />
                )
              }
            />
            <Route
              path="/sign-up"
              render={() =>
                currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <SignUpPage />
                )
              }
            />
            <Route
              path="/watchlist"
              render={() =>
                !currentUser ? (
                  <Redirect to="/register/sign-in" checkUserSession />
                ) : (
                  <WatchlistPage />
                )
              }
            />
            <Route
              exact
              path="/account"
              render={() =>
                !currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <AccountsPage />
                )
              }
            />
            <Route
              path="/account/edit/:info"
              render={() =>
                !currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <EditAccount />
                )
              }
            />
            <Route path="/account/reset-password" component={ResetPassword} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

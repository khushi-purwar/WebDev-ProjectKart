import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Copyleaks } from "plagiarism-checker";

export class CodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.classes = makeStyles((theme) => ({
      form: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
    }));

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let result;
    fetch("https://codequiry.com/api/v1/check/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        apikey:
          "37146c59fbf27de085770eb1e2837dea747c70006d6bd2e774d6093ff954ba56",
      },
      body: this.state.value,
    })
      .then((res) => {
        res.json();
        console.log(res);
        result = res;
      })
      .catch((error) => {
        console.log(error);
      });
    const element = (
      <p>
        Search Results: <br /> {result}
      </p>
    );
    ReactDOM.render(element, document.getElementById("results"));
    event.preventDefault();
  }

  render() {
    return (
      <div className={this.classes.root}>
        <h1>Plagiarism Checker</h1>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Paper className={this.classes.paper}>
              <form fullWidth className={this.classes.form}>
                <label>
                  Enter Text Here To Check Plagiarism: <br />
                  <TextField
                    fullWidth
                    value={this.state.value}
                    onChange={this.handleChange}
                    multiline
                    variant="filled"
                    placeholder="..."
                  />
                </label>
                <br />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={this.handleSubmit}
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
            >
              Check
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Paper className={this.classes.paper}>
              <div id="results" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

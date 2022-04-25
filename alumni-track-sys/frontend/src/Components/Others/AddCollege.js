import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = React.useState({
    CollegeName: "",
    CollegeEmail: "",
    CollegeId: "",
    CollegePhone: "",
    CollegePassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      CollegeName: values.CollegeName,
      CollegeEmail: values.CollegeEmail,
      CollegeId: values.CollegeId,
      CollegePhone: values.CollegePhone,
      CollegePassword: values.CollegePassword,
    };

    console.log(body);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const rep1 = await fetch(
        "http://localhost:3045/api//CollegeRegister",
        requestOptions
      );
      if (rep1.ok) {
        alert("Event Added");
      } else {
        alert("Error !! , Some Error Occured");
      }
    } catch (err) {
      console.log("Err ", err);
      alert("Error !! Some Error Occured");
    }

    handleClose();
  };

  return (
    <div>
      <button
        variant="contained"
        style={{
          marginLeft: "400px",
          backgroundColor: "#fd4b2e",
          marginTop: "50px",
        }}
        onClick={handleOpen}
      >
        Add College
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ marginLeft: "90px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Add New College
          </Typography>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ width: "330px", marginTop: "10px" }}
              id="outlined-basic"
              label="College Name"
              variant="outlined"
              value={values.CollegeName}
              onChange={handleChange("CollegeName")}
            />

            <TextField
              style={{ width: "330px", marginTop: "10px" }}
              id="outlined-basic"
              label="College Id"
              variant="outlined"
              value={values.CollegeId}
              onChange={handleChange("CollegeId")}
            />

            <TextField
              style={{ width: "330px", marginTop: "10px" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={values.CollegePhone}
              onChange={handleChange("CollegePhone")}
            />

            <TextField
              style={{ width: "330px", marginTop: "10px" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              value={values.CollegeEmail}
              onChange={handleChange("CollegeEmail")}
            />

            <TextField
              style={{ width: "330px", marginTop: "10px" }}
              id="outlined-basic"
              label="Set Password"
              variant="outlined"
              value={values.CollegePassword}
              onChange={handleChange("CollegePassword")}
            />

            {/* <input type="date" value={values.date}
              onChange={handleChange("date")} /> */}

            <br />
            <br />

            <Button
              variant="contained"
              style={{ marginLeft: "100px" }}
              type="submit"
            >
              Add College
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

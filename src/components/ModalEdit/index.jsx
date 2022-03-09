import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  justifyContentEnd: {
    display: "flex",
    justifyContent: "end",
    marginTop: "16px",
  },
}));

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

function ModalEdit({
  openEdit,
  handleCloseEdit,
  valueModify,
  setValue,
  handleSubmitEdit,
}) {
  const classes = useStyles();

  return (
    <section>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm
          </Typography>
          <TextField
            id="standard-input"
            label="Edit work"
            variant="standard"
            defaultValue={valueModify.work}
            sx={{ width: "100%", marginTop: "16px" }}
            onChange={(e) => setValue(e.target.value)}
          />
          <Box className={classes.justifyContentEnd}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitEdit}
            >
              OK
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginLeft: "8px" }}
              onClick={handleCloseEdit}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </section>
  );
}

export default ModalEdit;

import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

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

function ModalDelete({
  openDelete,
  handleCloseDelete,
  valueModify,
  handleSubmitDelete,
}) {
  const classes = useStyles();

  return (
    <section>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete job #{valueModify.work} ?
          </Typography>
          <Box className={classes.justifyContentEnd}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitDelete}
            >
              OK
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginLeft: "8px" }}
              onClick={handleCloseDelete}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </section>
  );
}

export default ModalDelete;

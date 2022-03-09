import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createWork,
  getListWork,
  deleteWork,
  editWork,
} from "./../../redux/actions";
import { RootReducer } from "../../redux/reducers";
import ModalDelete from "../../components/ModalDelete";
import ModalEdit from "../../components/ModalEdit";
import { ITodo } from "../../interface";

interface IAppProps {}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "30%",
    margin: "32px auto 0",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  list: {
    marginTop: "32px",
    border: "1px solid #ccc",
  },
}));

function Home(props: IAppProps) {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [valueModify, setValueModify] = useState<ITodo>({ id: 0, work: "" });
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();
  const { dataCreate, listWork, dataDelete, dataEdit } = useSelector(
    (state: RootReducer) => state.homeReducer
  );

  useEffect(() => {
    dispatch(getListWork());
  }, [dataCreate, dataDelete, dataEdit]);

  //Modal delete
  const handleOpenDelete = (item: ITodo) => {
    setValueModify(item);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => setOpenDelete(false);

  const handleSubmitDelete = () => {
    dispatch(
      deleteWork({
        id: valueModify.id,
      })
    );
    setOpenDelete(false);
  };

  //Modal edit
  const handleOpenEdit = (item: ITodo) => {
    setValueModify(item);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  const handleSubmitEdit = () => {
    dispatch(
      editWork({
        id: valueModify.id,
        work: value,
      })
    );
    setOpenEdit(false);
  };

  //Button add
  const handleClickAddNew = () => {
    if (value) {
      dispatch(
        createWork({
          work: value,
        })
      );
    }
  };

  return (
    <section className={classes.container}>
      <h1>TO DO LIST</h1>
      <Box className={classes.wrapper}>
        <TextField
          id="outlined-basic"
          label="Enter your work ..."
          variant="outlined"
          className={classes.input}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: "8px" }}
          onClick={handleClickAddNew}
        >
          Add new
        </Button>
      </Box>
      {listWork.length > 0 && (
        <Box aria-label="main mailbox folders" className={classes.list}>
          <List>
            {listWork.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton>
                  <ListItemText primary={item.work} />
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleOpenEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginLeft: "8px" }}
                    onClick={() => handleOpenDelete(item)}
                  >
                    Delete
                  </Button>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <ModalDelete
        openDelete={openDelete}
        valueModify={valueModify}
        handleCloseDelete={handleCloseDelete}
        handleSubmitDelete={handleSubmitDelete}
      />
      <ModalEdit
        openEdit={openEdit}
        valueModify={valueModify}
        setValue={setValue}
        handleCloseEdit={handleCloseEdit}
        handleSubmitEdit={handleSubmitEdit}
      />
    </section>
  );
}

export default Home;

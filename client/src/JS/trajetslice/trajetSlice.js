import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const ajouterTrajet = createAsyncThunk("Ajouter", async (trajet) => {
  try {
    let result = await axios.post("http://localhost:5000/api/trajet/",trajet);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllTrajets = createAsyncThunk("getAllTrajets", async () => {
  try {
    const result = await axios.get("http://localhost:5000/api/trajet/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTrajet = createAsyncThunk("trajet/dalete", async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/api/trajet/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});


export const modifierTrajet = createAsyncThunk("modifier/trajet",async (trajet) => {
    try {
      const result = await axios.put(`http://localhost:5000/api/trajet/${trajet._id}`, trajet);
      return result.data;
    } catch (error) {
      console.log(error)
    }
  }
);


const initialState = {
  trajet: null,
  status: null,
  trajets:null
};

export const trajetSlice = createSlice({
  name: "trajet",
  initialState,
  reducers: {},
  extraReducers: {
    [ajouterTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [ajouterTrajet.fulfilled]: (state,action) => {
      state.status = "success";
      state.trajet = action.payload.response;
    },
    [ajouterTrajet.rejected]: (state) => {
      state.status = "fail";
    },
    [getAllTrajets.pending]: (state) => {
      state.status = "pending";
    },
    [getAllTrajets.fulfilled]: (state,action) => {
      state.status = "success";
      state.trajets = action.payload.response;
    },
    [getAllTrajets.rejected]: (state) => {
      state.status = "fail";
    },
    [modifierTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [modifierTrajet.fulfilled]: (state,action) => {
      state.status = "success";
    },
    [modifierTrajet.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [deleteTrajet.fulfilled]: (state,action) => {
      state.status = "success";
    },
    [deleteTrajet.rejected]: (state) => {
      state.status = "fail";
    },
  },
});


export default trajetSlice.reducer;
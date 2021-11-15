import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk("register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/api/user/register",user);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});

export const updateUser = createAsyncThunk("update", async (user) => {
  try {
    console.log(user);
    let result = await axios.put(`http://localhost:5000/api/user/${user._id}`,user);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});

export const loginUser = createAsyncThunk("login", async (user) => {
  try {
    const result = await axios.post("http://localhost:5000/api/user/login",user);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});

export const currentUser = createAsyncThunk("current", async () => {
  let opts ={
    headers:{
      Authorization:localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("http://localhost:5000/api/user/current",opts);
    return result.data;
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
});


export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const result = await axios.get("http://localhost:5000/api/user/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneById = createAsyncThunk("getOneById", async (id) => {
  try {
    const result = await axios.get(`http://localhost:5000/api/user/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteuser = createAsyncThunk("user/dalete", async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/api/user/${id}`);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});


const initialState = {
  user: null,
  status: null,
  users:null,
  userDetail:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout : (state,action)=>{
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      state.user = null;
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "pending";
    },
    [registerUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token",action.payload.token);
      if(action.payload.user.isAuth){
        localStorage.setItem("isAuth",action.payload.user.isAuth);
      }
    },
    [registerUser.rejected]: (state) => {
      state.status = "fail";
    },
    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token",action.payload.token);
      if(action.payload.user.isAuth){
        localStorage.setItem("isAuth",action.payload.user.isAuth);
      }

    },
    [loginUser.rejected]: (state) => {
      state.status = "fail";
    },
    [currentUser.pending]: (state) => {
      state.status = "pending";
    },
    [currentUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [currentUser.rejected]: (state) => {
      state.status = "failed";
    },
    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state,action) => {
      state.status = "success";
    },
    [updateUser.rejected]: (state) => {
      state.status = "failed";
    },
    [getAllUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state,action) => {
      state.status = "success";
      state.users = action.payload.response;
    },
    [getAllUsers.rejected]: (state) => {
      state.status = "failed";
    },
    [getOneById.pending]: (state) => {
      state.status = "pending";
    },
    [getOneById.fulfilled]: (state,action) => {
      state.status = "success";
      state.userDetail = action.payload.response;
    },
    [getOneById.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteuser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteuser.fulfilled]: (state) => {
      state.status = "success";
    },
    [deleteuser.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;
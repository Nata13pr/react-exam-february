// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {loadAllPosts} from "../../../services/post.service.ts";
//
// export const loadPosts = createAsyncThunk(
//     'postSlice/loadPosts',
//     async (_, thunkAPI) => {
//
//         try {
//             const posts = await loadAllPosts()
//
//             return thunkAPI.fulfillWithValue(posts);
//         } catch (e) {
//             console.log(e);
//             return thunkAPI.rejectWithValue('some error')
//         }
//     }
// )
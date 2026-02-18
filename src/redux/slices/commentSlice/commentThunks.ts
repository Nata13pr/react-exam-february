// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {loadAllComments} from "../../../services/comment.service.ts";
//
// export const loadComments = createAsyncThunk(
//     'commentSlice/loadComments',
//     async (_, thunkAPI) => {
//
//         try {
//             const posts = await loadAllComments()
//
//             return thunkAPI.fulfillWithValue(posts);
//
//         } catch (e) {
//             console.log(e);
//             return thunkAPI.rejectWithValue('some error')
//         }
//     }
// )
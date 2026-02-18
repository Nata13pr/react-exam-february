// import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
// import type {IPost} from "../../../models/IPost.ts";
// import {loadPosts} from "./postThunks.ts";
// import type {PostSliceType} from "./postTypes.ts";
//
// const initialState: PostSliceType = {
//     posts: [],
// };
//
// export const postSlice = createSlice({
//     name: 'postSlice',
//     initialState: initialState,
//     reducers: {},
//     extraReducers: builder =>
//         builder
//             .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
//                 state.posts = action.payload
//             })
//             .addCase(loadPosts.rejected, (state, action) => {
//                 console.log(state);
//                 console.log(action)
//             })
// })
//
// export const postSliceActions = {
//     ...postSlice.actions, loadPosts
// }
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMeals } from "../../services/apiMeals";

const initialState = {
  results: [],
  status: "idle",
  error: "",
  popularSlide: 0,
  recommendedSlide: 0,
};

export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async function () {
    const data = await getAllMeals();
    console.log(data);
    return data;
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState,

  reducers: {
    increasePopularSlide: (state, action) => {
      state.popularSlide += 5;
    },

    decreasePopularSlide: (state, action) => {
      state.popularSlide -= 5;
    },

    increaseRecommendedSlide: (state, action) => {
      state.recommendedSlide += 5;
    },

    decreaseRecommendedSlide: (state, action) => {
      state.recommendedSlide -= 5;
    },

    addMeal: (state, action) => {
      // state.results.push(action.payload);
      state.results = [action.payload, ...state.results];
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchMeals.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "success";
        const items = action.payload.Items;
        console.log(items);
        state.results = items.map((item) => ({
          id: item.Id,
          name: item.Name,
          price: item.Price,
          image: item.ImageUrl,
          isPopular: item.IsPopular,
          isRecommended: item.IsRecommended,
        }));
        console.log(state.results);
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = "There was a problem getting meals. Please try again!";
      }),
});

export const {
  increasePopularSlide,
  decreasePopularSlide,
  increaseRecommendedSlide,
  decreaseRecommendedSlide,
  addMeal,
} = mealsSlice.actions;

export default mealsSlice.reducer;

export const getMeals = (state) => state.meals;

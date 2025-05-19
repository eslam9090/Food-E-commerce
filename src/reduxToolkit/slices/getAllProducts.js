import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../axios/axiosConfig";
import { toast } from "react-toastify"; // Import toast

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig.get("product?populate=*");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const getSingleProducts = createAsyncThunk(
  "products/getSingleProducts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig.get(`product/${id}?populate=*`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig.get("category?populate=*");

      return data.data;
    } catch (error) {
      rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const addToCart = createAsyncThunk(
  "products/addToCart",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig.get(`product/${id}?populate=*`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const addToWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig.get(`product/${id}?populate=*`);
      console.log("addToWishlist", data);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    wishListProducts: [],
    cartItems: [],
    categories: [],
    singelProduct: {},
    totalAmountState: 0,
    loading: false,
    error: null,
  },
  reducers: {
    incrementQty: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.documentId === action.payload
      );
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const finded = state.cartItems.find(
        (item) => item.documentId === action.payload
      );
      if (finded) {
        if (finded.quantity > 1) {
          finded.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.documentId !== action.payload
          );
        }
      }
      // const index = state.cartItems.findIndex(
      //   (item) => item.documentId === action.payload
      // );

      // if (index !== -1) {
      //   if (state.cartItems[index].quantity > 1) {
      //     state.cartItems[index].quantity -= 1;
      //   } else {
      //     state.cartItems.splice(index, 1);
      //   }
      // }
    },
    totlalAmount: (state) => {
      const total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.totalAmountState = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getSingleProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.singelProduct = state.allProducts.find(
          (product) => product.documentId === action.payload.documentId
        );
      })
      .addCase(getSingleProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        const cartItem = state.cartItems.find(
          (item) => item.documentId === action.payload.documentId
        );

        if (cartItem) {
          cartItem.quantity += 1;
          toast.info("Quantity updated in cart!", { position: "top-right" }); // Show toast for existing item
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
          toast.success(` ${action.payload.productName} added to cart!`, {
            position: "top-right",
          });
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.error.message, { position: "top-right" });
      });
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const exsit = state.wishListProducts.find(
          (item) => item.documentId === action.payload.documentId
        );
        if (exsit) {
          state.wishListProducts = state.wishListProducts.filter((f) => {
            return f.documentId !== action.payload.documentId;
          });
          toast.error("Product Removed from wishlist", {
            position: "top-right",
          });
          return;
        } else {
          state.wishListProducts.push(action.payload);
          toast.success(` ${action.payload.productName} added to wishlist!`, {
            position: "top-right",
          });
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { decrementQty, incrementQty, totlalAmount } =
  productsSlice.actions;

export default productsSlice.reducer;
export {
  getAllProducts,
  getSingleProducts,
  getCategories,
  addToCart,
  addToWishlist,
};

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cashout from './cashout/CashoutSlice';
import auth from "./auth/AuthSlice";
import coupon from "./coupon/CouponSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "coupon"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const couponPersistConfig = {
  key: "coupon",
  storage,
  whitelist: ["coupons"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  cashout,
  coupon: persistReducer(couponPersistConfig, coupon),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store);

export { store, persistor };
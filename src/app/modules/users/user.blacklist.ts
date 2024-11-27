import { model, Schema } from "mongoose";

const blacklistSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
});

export const BlacklistModel = model("Blacklist", blacklistSchema);

import mongoose, { Schema } from "mongoose";

type PlaylistItem = {
  addedAt: Date;
  addedBy: Object;
  isLocal: boolean;
  primaryColor: string | null;
  track: Object;
  videoThumbnail: Object;
};

const PlaylistItemSchema = new Schema<PlaylistItem>({
  addedAt: Date,
  addedBy: Object,
  isLocal: Boolean,
  primaryColor: String,
  track: Object,
  videoThumbnail: Object,
});

const PlaylistItemModel = mongoose.model("PlaylistItemsSchema", PlaylistItemSchema);

export default PlaylistItemModel;

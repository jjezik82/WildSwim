import mongoose from 'mongoose';

const placeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
    },
    image: {
      type: String,
    },
    position: {
      type: Map,
      of: { type: String },
      required: true,
      default: { lat: '0', lng: '0' },
    },
    category: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model('Place', placeSchema);

export default Place;

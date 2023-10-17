import mongoose  from "mongoose";

const PostSchema = new mongoose.Schema({
  userId:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    max: 50
  },
  img:{
    type: String,
  },
  likes:{
    type: Array,
    default: []
  }
},
{timestamps: true}
);

export default mongoose.model('Post', PostSchema);
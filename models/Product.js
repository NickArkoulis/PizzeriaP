import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type :String,
        required :true, // every product must have a title
        maxlength: 60 //validation rule
    },
    desc:{ //description
        type :String,
        required :true, // every product must have a title
        maxlength: 170 
    },
    img:{
        type: String, // we will upload images from our computer, it will return a url, which will be string
        required: true, // every product must have a title      
    },
    prices:{
        type: [Number], //array, but only including numbers
        required: true
    },
    extraOptions: {
        type: [
          {
            text: { type: String, required: true },
            price: { type: Number, required: true }
          },
        ],
      },
    },
    { timestamps: true } // we will have the date when a product was created
  );
  
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
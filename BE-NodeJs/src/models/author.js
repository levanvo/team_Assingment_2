import mongoose from "mongoose";

const SchemaAuthor = mongoose.Schema(
    {
        name: {
            type:String,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        pass:{
            type:String,
            required:true,
        },
        role:String,
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("author",SchemaAuthor);
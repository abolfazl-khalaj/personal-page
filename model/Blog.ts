
import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';

export interface BlogType {
    description: string ,
    title: string ,
    cover: string ,
    body: string ,
}

const SchemaBlog = new Schema<BlogType>({
    description: {
        type: SchemaTypes.String ,
        required: true
    },
    title: {
        type: SchemaTypes.String ,
        required: true
    },
    cover: {
        type: SchemaTypes.String,
        required: true, 
    },
    body: {
        type: SchemaTypes.String, 
        required: true, 
    }
}, { timestamps: true });

const BlogModel = mongoose.models.Blog || mongoose.model<BlogType>('Blog', SchemaBlog);

export default BlogModel;

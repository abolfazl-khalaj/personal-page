
import { required } from 'joi';
import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';

export interface SocialMediaType {
    name: string ,
    cover: string ,
    url: string ,
}

const SchemaSocialMedia = new Schema<SocialMediaType>({
    name: {
        type: SchemaTypes.String ,
        required: true
    },
    cover: {
        type: SchemaTypes.String,
        required: true, 
    },
    url: {
        type: SchemaTypes.String, 
        required: true, 
    }
}, { timestamps: true });

const SocialMediaModel = mongoose.models.SocialMedia || mongoose.model<SocialMediaType>('SocialMedia', SchemaSocialMedia);

export default SocialMediaModel;

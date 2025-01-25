
import mongoose, { Schema, SchemaTypes } from 'mongoose';

export interface AboutMeType {
    introduction: string ,
    photoMe: string ,
    descriptionMe: string ,
    password: string
}

const SchemaAboutMe = new Schema<AboutMeType>({
    introduction: {
        type: SchemaTypes.String ,
        required: true
    },
    photoMe: {
        type: SchemaTypes.String,
        required: true, 
    },
    descriptionMe: {
        type: SchemaTypes.String, 
        required: true, 
    },
    password: {
        type: SchemaTypes.String,
        required: true
    }
}, { timestamps: true });

const AboutMeModel = mongoose.models.About || mongoose.model<AboutMeType>('About', SchemaAboutMe);

export default AboutMeModel;


import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';

export interface SkillsType {
    name: string ,
    cover: string ,
    mastery: number ,
}

const SchemaSkills = new Schema<SkillsType>({
    name: {
        type : SchemaTypes.String ,
        required: true
    },
    cover: {
        type: SchemaTypes.String,
        required: true, 
    },
    mastery: {
        type: SchemaTypes.Number, 
        required: true, 
    }
}, { timestamps: true });

const SkillsModel = mongoose.models.Skill || mongoose.model<SkillsType>('Skill', SchemaSkills);

export default SkillsModel;

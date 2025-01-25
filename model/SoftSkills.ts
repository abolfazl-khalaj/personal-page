
import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';

export interface SoftSkillsType {
    name: string ,
    mastery: number ,
}

const SchemaSoftSkills = new Schema<SoftSkillsType>({
    name: {
        type: SchemaTypes.String,
        required: true, 
    },
    mastery: {
        type: SchemaTypes.Number, 
        required: true, 
    }
}, { timestamps: true });

const SoftSkillsModel = mongoose.models.SoftSkill || mongoose.model<SoftSkillsType>('SoftSkill', SchemaSoftSkills);

export default SoftSkillsModel;


import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';

export interface ProjectType {
    name: string ,
    description: string ,
    cover: string ,
    url: string ,
}

const SchemaProject = new Schema<ProjectType>({
    name: {
        type: SchemaTypes.String ,
        required: true
    },
    description: {
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

const ProjectModel = mongoose.models.Project || mongoose.model<ProjectType>('Project', SchemaProject);

export default ProjectModel;

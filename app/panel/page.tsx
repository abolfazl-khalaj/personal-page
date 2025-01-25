import React from 'react';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import TextHome from '@/components/template/TextHomeP';
import About from '@/components/template/AboutP';
import Projects, { ProjectsResponseType } from '@/components/template/ProjectsP';
import Skills, { SkillsResponseType } from '@/components/template/SkillsP';
import SoftSkills, { SoftSkillsResponseType } from '@/components/template/SoftSkillsP';
import SocialMedia, { SocialResponseType } from '@/components/template/SocialMediaP';
import connectedDB from '@/configs/DB';
import ProjectModel, { ProjectType } from '@/model/Project';
import SkillsModel, { SkillsType } from '@/model/Skills';
import SoftSkillsModel, { SoftSkillsType } from '@/model/SoftSkills';
import SocialMediaModel, { SocialMediaType } from '@/model/SocialMedia';
import AboutMeModel, { AboutMeType } from '@/model/AboutMe';
import Blog, { BlogsResponseType } from '@/components/template/BlogsP';
import BlogModel, { BlogType } from '@/model/Blog';
import MyPhotoP from '@/components/template/MyPhotoP';
import PasswordP from '@/components/template/PasswordP';

export default async function Panel (){

    await connectedDB()

    const projects : ProjectsResponseType[] = await ProjectModel.find().lean().select('-__v -updatedAt -createdAt')
    const skills : SkillsResponseType[] = await SkillsModel.find().lean().select('-__v -updatedAt -createdAt')
    const softSkills : SoftSkillsResponseType[] = await SoftSkillsModel.find().lean().select('-__v -updatedAt -createdAt')
    const social : SocialResponseType[] = await SocialMediaModel.find().lean().select('-__v -updatedAt -createdAt')
    const about : AboutMeType[] = await AboutMeModel.find().lean().select('-__v -updatedAt -createdAt')
    const blog: BlogsResponseType[] = await BlogModel.find().lean().select('-__v -updateAt ')

    const convertedSkills = skills.map(project => ({
        ...project,
        _id: project._id.toString() // Convert ObjectId to string
    }));
    const convertedProjects = projects.map(project => ({
        ...project,
        _id: project._id.toString() // Convert ObjectId to string
    }));
    const convertedSoftSkills = softSkills.map(project => ({
        ...project,
        _id: project._id.toString() // Convert ObjectId to string
    }));
    const convertedSocials = social.map(project => ({
        ...project,
        _id: project._id.toString() // Convert ObjectId to string
    }));
    const convertedBlogs = blog.map(project => ({
        ...project,
        _id: project._id.toString() // Convert ObjectId to string
    }));


    return (
        <div className="py-4 px-7 flex flex-col gap-y-5">

            <TextHome text={about[0].introduction}/>
            <About text={about[0].descriptionMe} />
            <PasswordP text={about[0].password}/>
            <MyPhotoP text={about[0].photoMe}/>
            <Projects projects={convertedProjects}/>
            <SocialMedia socials={convertedSocials}/>
            <Skills skills={convertedSkills}/>
            <SoftSkills softSkills={convertedSoftSkills}/>
            <Blog blogs={convertedBlogs}/>

        </div>
    )
}
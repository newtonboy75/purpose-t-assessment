import express from 'express'
import { getProjects, getAllFormByProjectId, saveForm } from '../database/db'


export const getAllData = async (req: express.Request, res: express.Response) => {
    console.log(req)
    return res.status(200)
}

export const getDataById = async (req: express.Request, res: express.Response) => {
    //console.log(req.params.id)
    const data = await getAllFormByProjectId(req.params.id)
    //console.log(data)
    return res.status(200).json(data)
}

export const saveData = async (req: express.Request, res: express.Response) => {
    const {id, type, projectid, part} = req.query
    saveForm(id, JSON.stringify(req.body), projectid, type, part)
    return res.status(200)
}

export const getAllProjects = async (req: express.Request, res: express.Response) => {
    const data = await getProjects()
    return res.status(200).json(data)
}
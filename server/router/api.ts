import express from 'express'
import { getDataById, getAllData, saveData, getAllProjects } from '../controllers/api'

export default (router: express.Router) => {
    router.get('/api/form', getAllData);
    router.get('/api/form/:id', getDataById);
    router.post('/api/form', saveData);
    router.get('/api/projects', getAllProjects);
}
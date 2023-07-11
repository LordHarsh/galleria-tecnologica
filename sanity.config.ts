import { defineConfig } from 'sanity'
import { deskTool } from "sanity/desk"
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'oa9pxp59',
    dataset: 'production',
    title: 'galleria-tecnologica',
    apiVersion: '2023-06-11',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;
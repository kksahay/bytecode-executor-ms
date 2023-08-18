import fs from 'fs'
import { exec } from 'child_process'


export const getTestcase = async (req, res, next) => {
    const { id } = req.params
    //get input and output file from firebase
    next()
}
export const codeRunner = async (req, res, next) => {
    const { id } = req.params
    //run child process and store the output 
    next();
};


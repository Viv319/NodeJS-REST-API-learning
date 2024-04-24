const Users = require('./models/Users.js')

const getUsers = async (req,res)=>{
    try{
        const users = await Users.find()
        res.json({
            status: 'SUCCESS',
            data:users
        })
    }catch(error){
        res.json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }
}

const createUsers =  async (req,res)=>{
    try{
        const { firstName, lastName, email, avatar } = req.body
        await Users.create({ firstName, lastName, email, avatar })
        res.json({
            status: 'SUCCESS',
            data: 'user created successfully'
        })
    }catch(error){
        res.json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }
}

const updateUsers = async (req,res)=>{
    try{
        const { id } = req.params
        const { firstName, lastName, email, avatar }= req.body
        await Users.findByIdAndUpdate(id, { firstName, lastName, email, avatar })
        res.json({
            status: 'SUCCESS',
            data: 'user updated successfully'
        })
    }catch(error){
        res.json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }
}

const deleteUsers = async (req,res)=>{
    try{
        const { id } = req.params
        await Users.findByIdAndDelete(id)
        res.json({
            status: 'SUCCESS',
            data: 'user deleted successfully'
        })
    }catch(error){
        res.json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}
import movieModels from "../models/movieModels.js";

export const listMovie = async (req,res) => {
    try {
        const data = await movieModels.find({
        })
    res.status(200).json({
        message: "Daftar Film:",
        data : data
    })

    } catch (error){
         res.status(500).json({
            message: error,
            data: null
        })
    }
}

export const createMovie = async (req,res)=>{
    try {
        const request = req.body
        console.log(request)

        const response = await movieModels.create({
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara,
        })
        res.status(201).json({
            message: "Data Film berhasil dibuat",
            data: response
        })

    } catch(error){
        res.status(500).json({
            error : error.message
        })
    }
}

export const updateMovie = async (req,res) => {
    try {
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(400).json({
                message : "Data Wajib diisi",
                data: null
            })
        }
        console.log(request)
        const response = await movieModels.findByIdAndUpdate(id, {
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara,
        })

        if(!response){
            return res.status(500).json({
                message: "Data Gagal diupdate",
                data: response
            })
        }

        return res.status(200).json({
            message: "Data Berhasil Diupdate"
        })

    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const deleteMovie = async (req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            res.status(204).json({
                message: "Data Film Wajib Diisi",
                data: response
            })
        }

        const response = await movieModels.findByIdAndDelete(id)
        if(response) {
            res.status(500).json({
                message : "Data Film Berhasil Dihapus",
                data: null
            })
        }
        return res.status(404).json({
            message: "Data Film Tidak Ditemukan",
            date: null
        })

    }catch (error){
        res.status(500).json({
            message : error,
            data: null
        })
    }
}
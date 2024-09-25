import Movie from "../models/movie-model.js"

export const store = async (req, res) => {
    try {
        const content = await Movie .create(req.body);
        
        res.status(201).josn(content)
    }catch (error) {
        res.status(400).send(error)
    }
};

export const index = async (req, res) => {
    try {
        const content = await Movie.find({
            renteBy: undefined
        }).exec();
        
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

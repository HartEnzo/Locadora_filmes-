const store = (req, res) => {
    try {
        const content = await Movie.
        res.status(201).josn(content)
    }catch (error) {
        res.status(400).send(error)
    }
};

const index = async (req, res) => {
    try {
        const content = await Movie.find({
            renteBy: undefined
        }).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

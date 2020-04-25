const Jikan = require('jikan-node');

const mal = new Jikan();

module.exports = {
    async index(req, res) {
        // const { anime } = req.body;
        
        const animes = await mal.findGenre('anime')

        return res.json(animes);
    }
}
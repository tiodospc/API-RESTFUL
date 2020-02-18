const ProductModel = require('../models/product')

    const transformer =  job => ({
    
        type: 'job',
        id: job.id,
        attributes: {   
            type: job.type,
            cliente: job.cliente,
            tentant: job.tentant    
        },
        links: {
        self: `/api/job${job.id}`
        }
    });

    const getAll  = async (request, h) => {
        const job   = await ProductModel.find({});
        return {data: job.map(transformer)};   
    }; 
    
    const find = async (rsequest, h) =>{
        const job = await ProductModel.findById(req.params.id);
        return {data: transformer(job)};
    };
    
    const save = async (req, h) => {
        const {type, cliente, tentant} = req.payload;
        const job = new ProductModel;
    
        job.type = type;
        job.cliente = cliente;
        job.tentant = tentant;

        await job.save();

        return h.response(transformer(job)).code(201)
    }

    const remove = async(req, h) =>{
        await ProductModel.findOneAndDelete({_id: req.params.id})
        return h.response().code(204);
 
    }

    module.exports = {
        getAll,
        save,
        remove
    }
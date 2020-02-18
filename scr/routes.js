const jobHandler = require('./handles/product')

module.exports=[
    {
        method: 'GET',
        path: '/api/job/jobs',
        handler: jobHandler.getAll
        
    },
   
    {
        method: 'POST',
        path: '/api/job/jobs',
        handler: jobHandler.save
        
    },

    {
        method: 'DELETE',
        path: '/api/job/jobs/{id}',
        handler: jobHandler.remove
        
    }

]
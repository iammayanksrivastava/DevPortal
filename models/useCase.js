const mongoose = require ('mongoose')

const useCaseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true, 
        validate : {
            validator: async function (value){
                const domain = await mongoose.model('domain').findOne({name: value})
                return !!domain
            },
            message: 'Domain does not exist in the database'
        }
    }, 

    strategicgoal: {
        type: String,
        required: true
    },
    usecaseowner: {
        type: String,
        required: true
    },

    users: {
        type: Array,
        required: true
    }, 

    objective :{
        type: String,
        required: true
    }, 

    measureofsuccess: {
        type: String
    }, 
    primaryBusinessvalue: { 
        type: String
    }, 
    secondaryBusinessvalue: {
        type: String
    }, 
    businessvaluepotential: {
        type: Number
    }, 
    assumptions: {
        type: String
    },
    isAnalytics: {
        type: Boolean
    }, 
    isDataScience: {
        type: Boolean
    }, 
    explaination: {
        type: String
    },
    kpiDefinition: {
        type: String
    }, 
    requiredData: {
        type: String
    }, 
    dataGovernance: {
        type: String
    }, 
    existsinCurated: {
        type: Boolean
    },
    keyresources: {
        type: String
    },
    impactonotherdomains:{
        type:  String
    },
    existsinBDH: {
        type: Boolean
    },
    existsinADL: {
        type: Boolean
    },
    complexity:{
        type: String
    },
    complexitydesc:{
        type: String
    }
})


const useCase = mongoose.model('useCase', useCaseSchema);
module.exports = useCase
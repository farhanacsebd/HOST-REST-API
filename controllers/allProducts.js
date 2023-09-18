const Product = require("../models/product");


const getallProducts = async(req,res) => {
    
    const {company} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }
    
    const myData = await Product.find(queryObject)
    res.status(200).json({myData})
}

const getallProductsTesting = async(req,res) => {
    res.status(200).json({msg:"I am getAllProductsTesting"})
}

module.exports = {getallProducts, getallProductsTesting}
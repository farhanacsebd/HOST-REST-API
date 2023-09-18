const Product = require("../models/product");


const getallProducts = async(req,res) => {
    
    const {company, name, featured} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }

    if(featured) {
        queryObject.featured = featured;
    }
    

    if(name) {
        queryObject.name = { $regex: name, $options: "i"};
    }
    console.log(queryObject);
    
    const myData = await Product.find(queryObject)
    res.status(200).json({myData})
}

const getallProductsTesting = async(req,res) => {
    res.status(200).json({msg:"I am getAllProductsTesting"})
}

module.exports = {getallProducts, getallProductsTesting}
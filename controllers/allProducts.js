const Product = require("../models/product");


const getallProducts = async(req,res) => {
    const myData = await Product.find(req.query)
    res.status(200).json({myData})
}

const getallProductsTesting = async(req,res) => {
    res.status(200).json({msg:"I am getAllProductsTesting"})
}

module.exports = {getallProducts, getallProductsTesting}
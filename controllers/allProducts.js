const getallProducts = async(req,res) => {
    res.status(200).json({msg:"I am getAllProducts"})
}

const getallProductsTesting = async(req,res) => {
    res.status(200).json({msg:"I am getAllProductsTesting"})
}

module.exports = {getallProducts, getallProductsTesting}
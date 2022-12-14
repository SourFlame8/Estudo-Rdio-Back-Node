const Compradas = require("../infra/repository/compradasRepository");
const compradas = new Compradas();

class CompradasController {

    listAll(){
        return (req,res) => {
            compradas.listAll().then((response) => {
                if (response.error) return res.status(response.error).send({error: response.error});
                res.status(200).send({response})
            })
        };
    }


}

module.exports = CompradasController;
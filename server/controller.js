module.exports ={



getInventory: (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.get_inventory().then( (response) => {
    if(response){
      res.status(200).send(response)
    }
    else{res.status(500).send('Couldnt connect to db')}
  })
},

postProduct: (req, res) => {
  const dbInstance = req.app.get('db')
  const {name, price, url} = req.body
  dbInstance.post_product([name, price, url]).then( (response) => {
    res.status(200).send('it created it')
  })
  
},

deleteProduct: (req, res) => {
  const {id} = req.params
  dbInstance.delete_product([id]).then( (response) => {
    res.status(200).send('deleted')
  })
}











}
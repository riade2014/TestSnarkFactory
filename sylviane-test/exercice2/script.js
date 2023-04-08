const Commands = [
    {
        _id: "1",
        date: "1234566789900",
        totalPrice: 475,
        products: {
            refA: 3,
            refB: 5
        }
    },
    {
        _id: "2",
        date: "1234566789900",
        totalPrice: 475,
        products: {
            refB: 4
        }
    }
]

const Products = [
    {
        ref: "refA",
        name: "A",
        price: 75
    },
    {
        ref: "refB",
        name: "B",  
        price: 50
    }
]


function getCommands(){
    return new Promise((resolve, reject) => {
        Commands.length > 0 ? resolve(Commands) : reject("No commands")
        console.log("liste de commandes:",Commands)
    })
}


function getProducts(){
    return new Promise((resolve, reject) => {
        Products.length > 0 ? resolve(Products) : reject("No products")
    })
}




// 1.  Faire une fonction prenant toutes les commandes qui affiche la liste des produits avec à côté la quantité de ces produits dans l'ensemble des commandes
 async function analyzeCommands(){
    const products = await getProducts();
    const commands = await getCommands();
    const produitsCommandes = {};
    commands.forEach((command) => {
      
        /*
          Object.keys() renvoie un tableau contenant les noms des propriétés propres à l'objet.
         */
      const produits = Object.keys(command.products);
      /*
          forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
       */
      produits.forEach((produit) => {
        if (produitsCommandes[produit]) {
            
          produitsCommandes[produit] += command.products[produit];
        } else {
          produitsCommandes[produit] = command.products[produit];
        }
      });
    });

    products.forEach((produit) => {
        console.log(`${produit.ref} : ${produitsCommandes[produit.ref] || 0}`);
    });
    return produitsCommandes;
}

//const result = await analyzeCommands();
analyzeCommands();
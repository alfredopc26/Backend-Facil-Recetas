const { Router } = require('express');
const categories = require('../mockups/categories.json');
const ingredients = require('../mockups/ingredients.json');
const food = require('../mockups/food.json');
const recettes = require('../mockups/recettes.json');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando mi backend!"
        }
    );
})

router.get('/categories', (req, res) => {    
    res.json(categories);
})

router.get('/ingredients', (req, res) => {    
    res.json(ingredients);
})

router.get('/food', (req, res) => {    
    res.json(food);
})

router.get('/recettes', (req, res) => {    
    res.json(recettes);
})


module.exports = router;
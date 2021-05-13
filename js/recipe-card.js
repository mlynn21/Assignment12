function Recipe(title, servings, ingredients) {

        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;    

        this.message = function() {
            console.log(`Title: ${this.title} \n Serves: ${this.servings} \n Ingredients:`) 
            for (const ingredient of ingredients) { 
                console.log(ingredient)
            }
        }
    }

    const recipe1 = new Recipe('Guacamole', 4, ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoon Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper']);
    recipe1.message();




const promise = fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res => res)


const resolvedPromiseFunc = (promise) => {
    return promise.then(res => {
        const recipes = res.recipes.map((recipe) => {
            return {
                id: recipe.id,
                name: recipe.name,
                ingredients: recipe.ingredients.reduce((acc, ingredient, index) => {
                    acc[`ingredient${index}`] = ingredient
                    return acc
                }, {}),
                instructions: recipe.instructions.reduce((acc, instruction, index) => {
                    acc[`instruction${index}`] = instruction
                    return acc
                }, {}),
                prepTimeMinutes: recipe.prepTimeMinutes,
                cookTimeMinutes: recipe.cookTimeMinutes,
                servings: recipe.servings,
                difficulty: recipe.difficulty,
                cuisine: recipe.cuisine,
                caloriesPerServing: recipe.caloriesPerServing,
                tags: recipe.tags.reduce((acc, tag, index) => {
                    acc[`tag${index}`] = tag
                    return acc
                }, {}),
                userId: recipe.userId,
                image: recipe.image,
                rating: recipe.rating,
                reviewCount: recipe.reviewCount,
                mealType: recipe.mealType.reduce((acc, oneMealType, index) => {
                    acc[`mealType${index}`] = oneMealType
                    return acc
                }, {}),
            }
        })
        return Promise.all(recipes)
    })
}

resolvedPromiseFunc(promise).then(res => console.log(res))
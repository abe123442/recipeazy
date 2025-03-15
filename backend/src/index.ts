import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3000;

app.get("/beep", (req, res) => {
  res.json({ message: "boop" });
});

app.get("/recipes", async (req, res) => {
  let ingredients = req.query.ingredients as string;
  if (ingredients == undefined) {
    res.status(400);
    return;
  }

  ingredients = ingredients.split(",").join("\n");

  const params = new URLSearchParams();
  params.append("ingredientList", ingredients);
  const parsedIngredients = await fetch(`https://${process.env.SPOONACULAR_API_BASE}/recipes/parseIngredients`, {
    method: "POST",
    body: params.toString(),
    headers: {
      "X-API-Key": process.env.SPOONACULAR_API_KEY,
    } as HeadersInit,
  }).then(res => res.json());

  let ingredientsParsed = "";

  for (const ingredient of parsedIngredients) {
    ingredientsParsed += `${ingredient.amount} ${ingredient.unit} ${ingredient.name}\n`;
  }

  const searchparams = new URLSearchParams();
  searchparams.append("query", "A healthy dish to use the ingredients");
  searchparams.append("includeIngredients", ingredientsParsed);
  searchparams.append("sort", "min-missing-ingredients");
  const recipe = await fetch(`https://${process.env.SPOONACULAR_API_BASE}/recipes/complexSearch?${searchparams.toString()}`, {
    method: "GET",
    headers: {
      "X-API-Key": process.env.SPOONACULAR_API_KEY,
    } as HeadersInit,
  }).then(res => res.json());

  res.json(recipe);
});

app.get("/random", async (req, res) => {
  const random = await fetch(`https://${process.env.SPOONACULAR_API_BASE}/recipes/random`, {
    method: "GET",
    headers: {
      "X-API-Key": process.env.SPOONACULAR_API_KEY,
    } as HeadersInit,
  }).then(res => res.json());

  res.json(random);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

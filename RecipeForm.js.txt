import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function RecipeForm({ fetchRecipes }) {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [price, setPrice] = useState("")

  const handleAdd = async () => {
    await supabase.from("recipes").insert([{ name, ingredients, price }])
    setName(""); setIngredients(""); setPrice("")
    fetchRecipes()
  }

  return (
    <div className="p-4 border rounded-md my-4">
      <h2 className="font-bold mb-2">Add Recipe</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-1 mr-2"/>
      <input placeholder="Ingredients (JSON)" value={ingredients} onChange={e => setIngredients(e.target.value)} className="border p-1 mr-2"/>
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-1 mr-2"/>
      <button onClick={handleAdd} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
    </div>
  )
}

import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function InventoryForm({ fetchInventory }) {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [parLevel, setParLevel] = useState("")
  const [cost, setCost] = useState("")

  const handleAdd = async () => {
    await supabase.from("inventory").insert([{ name, quantity, par_level: parLevel, cost }])
    setName(""); setQuantity(""); setParLevel(""); setCost("")
    fetchInventory()
  }

  return (
    <div className="p-4 border rounded-md my-4">
      <h2 className="font-bold mb-2">Add Inventory Item</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-1 mr-2"/>
      <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className="border p-1 mr-2"/>
      <input placeholder="Par Level" value={parLevel} onChange={e => setParLevel(e.target.value)} className="border p-1 mr-2"/>
      <input placeholder="Cost" value={cost} onChange={e => setCost(e.target.value)} className="border p-1 mr-2"/>
      <button onClick={handleAdd} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
    </div>
  )
}

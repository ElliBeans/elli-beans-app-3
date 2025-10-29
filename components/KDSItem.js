export default function KDSItem({ order }) {
  return (
    <div className="p-2 border-b">
      <p className="font-bold">{order.name}</p>
      <p>{order.ingredients}</p>
    </div>
  )
}

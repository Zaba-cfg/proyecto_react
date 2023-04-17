import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductsId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getProductsId(itemId)
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [itemId])

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer

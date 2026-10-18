'use server'

import Explore from "@/components/explore";
import { getPopularProducts } from "../database/products";
import About from "@/components/about";

export default async function Home() {

  // get products from the database and format them
  const popularProducts = getPopularProducts();
  const popularProductsElements = popularProducts.map((product) => {
    return (
      <div key={product.name} className="popular-product">
        <img src={product.image} alt="" className="popular-product-image" />
        <h2 className="popular-product-name">{product.name}</h2>
        <h3 className="popular-product-price">{product.price}</h3>
      </div>
    )})

  return (
    <div className="landing-page-container">
      {/* landing message */}
      <div className="landing-message">
        <p className="landing-text">Plan your custom nail set with us!</p>
        <div className="plan-now-button">Plan now</div>
      </div>

      {/* popular products */}
      <div className="popular-products-container">
        <h2 className="popular-products-title">Press Ons</h2>
        {popularProductsElements}
      </div>

      <Explore />

      <About />
    </div>
  )
}

import "./CategoryItem.css"

export const CategoryItem = () => {
  return (
  <li className="category-item">
    <a href="#">
        <img src="img/categories/categories1.png" alt=""
        className="category-image" />
        <span className="category-title">SmartPhone</span>
    </a>

  </li>
  )
}
export default CategoryItem;
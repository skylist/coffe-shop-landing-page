// #region Navbar show/hide
const navbar = document.querySelector('.navbar__container')
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
// #endregion

// #region Cart show/hide
const cartItem = document.querySelector('.cart__itens__container')
document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}
// #endregion

// #region Search show/hide
const searchForm = document.querySelector('.search__form')
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}
// #endregion

window.onscroll = () => {
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
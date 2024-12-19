const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.category-item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('.category-title').textContent;

  const subcategoryCount = category.querySelectorAll('.subcategory-item').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subcategoryCount}`);
});

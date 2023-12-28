document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#categories input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        filterItems();
      });
    });
  });

  function filterItems() {
    const checkedCategories = Array.from(document.querySelectorAll('#categories input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
    const items = document.querySelectorAll('#categories-block li');

    items.forEach(item => {
      const itemCategory = item.classList.item(0);
      const shouldShow = checkedCategories.length === 0 || checkedCategories.includes(itemCategory);
      item.classList.toggle('hidden', !shouldShow);
    });
  }
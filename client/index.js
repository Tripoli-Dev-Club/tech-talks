// const catNames = ['سنبوسة', 'مكرونة', 'أرز بلبن', 'كفته', 'برميل', 'طنجرة'];

async function onClick() {
  const response = await fetch('http://localhost:3000/api/cat-names');
  const { catNames } = await response.json();
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];
  document.body.innerText = catName;
}

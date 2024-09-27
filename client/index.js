const catNames = ['سنبوسة', 'مكرونة', 'أرز بلبن', 'كفته', 'برميل', 'طنجرة'];

function onClick() {
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];
  document.body.innerText = catName;
}

const plan = document.querySelector("section");
console.log(plan.classList);
// plan.classList.add("bg-dark");
// plan.classList.remove("container");
console.log(plan.classList.contains("container"));
plan.classList.toggle("bg-dark");

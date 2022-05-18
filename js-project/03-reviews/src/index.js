const reviews = [
  {
    id: 1,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://mocah.org/thumbs/189413-thor-4200x2600.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 2,
    name: "susan smith",
    job: "web developer",
    img:
      "https://mocah.org/thumbnail/82725-loki-god-of-mischief-loki-tv-shows-hd-4k.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://mocah.org/thumbs/111424-doctor-strange-benedict-cumberbatch-best-movies-movie.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img:
      "https://mocah.org/thumbs/1093292-black-monochrome-portrait-photography-hair-Person-Tom-Hardy-man-beard-photograph-darkness-hairstyle-black-and-white-monochrome-photography-portrait-photography-facial-h.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  }
]
let count = 0;
change = (count) => {
  document.getElementById('person-img').src = reviews[count].img;
  document.getElementById('author').innerHTML = reviews[count].name;
  document.getElementById('job').innerHTML = reviews[count].job;
  document.getElementById('info').innerHTML = reviews[count].text;
}
next = () => {
  count++;
  if (count === reviews.length) {
    count = 0;
  }
  change(count)
}
prev = () => {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  change(count)
}
random = () => {
  c = Math.floor(Math.random() * reviews.length);
  while (count === c){
    c = Math.floor(Math.random() * reviews.length);
  }
  count = c;
  change(count);
}
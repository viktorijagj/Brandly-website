window.onload = function () {
  // Creating carousels
  //Slider carousel
  document.querySelectorAll(".slider-content").forEach((carousel) => {
    const carouselItem = carousel.querySelectorAll(".carousel-items");
    carouselItem.forEach((item) => {
      //Add the navbar
      let navHtml = `<nav class="grid center nav-menu" role="navigation">
            <h2 class="logo text-upper">Brand <span>ly</span></h2>
            <a id="toggle" href="#" class="toggle-menu">
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
            </a>
            <ul class="nav flex">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li class="brands"><a href="#">Brands <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul class="more-brands">
                  <li><a href="#">MPolo</a></li>
                  <li><a href="#">Adidas</a></li>
                  <li><a href="#">Nike</a></li>
                </ul>
                </li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
            `;
      item.insertAdjacentHTML("afterbegin", navHtml);
    });
    // Create the paggination
    const pagginationHtml = Array.from(carouselItem, () => {
      return `<div class="paggination"></div>`;
    });
    // Add the paggItems inside a paggination div
    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel-paggination">
            ${pagginationHtml.join("")}
            </div>
            `
    );
    //Select the paggination divs
    const paggination = carousel.querySelectorAll(".paggination");

    paggination.forEach((paggItem, index) => {
      paggItem.addEventListener("click", () => {
        //unselect the items
        carouselItem.forEach((item) =>
          item.classList.remove("carousel-items-selected")
        );
        paggination.forEach((pagg) =>
          pagg.classList.remove("paggination-selected")
        );

        //select the correct item
        carouselItem[index].classList.add("carousel-items-selected");
        paggination[index].classList.add("paggination-selected");
      });
    });
    //default selected items
    carouselItem[2].classList.add("carousel-items-selected");
    paggination[2].classList.add("paggination-selected");
  });

  // Trending items carousel

  document.querySelectorAll(".t-items").forEach((trending) => {
    const trendingItem = trending.querySelectorAll(".trending-items");
    const trendingMore = trending.querySelectorAll(".trends");
    // Create sizes and buttons
    trendingMore.forEach((item, i) => {
      //Add the navbar
      let trendingMoreHtml = `
              <div id="trending-more" class="trending-more grid">
              <input type="checkbox" class="hidden" name="size${i}1" id="size${i}1" value="1">
              <label for="size${i}1">M</label>            
              <input type="checkbox" class="hidden" name="size${i}2" id="size${i}2" value="2">
                <label for="size${i}2">L</label>   
                <input type="checkbox" class="hidden" name="size${i}3" id="size${i}3" value="3">
              <label for="size${i}3">XL</label>  
              <input type="checkbox" class="hidden" name="size${i}4" id="size${i}4" value="4">
              <label for="size${i}4">XXL</label>         
                <a class="text-upper" href="#">Shop now</a>
                <a class="text-upper" href="#">Size guide</a></div>
              `;
      item.insertAdjacentHTML("beforeend", trendingMoreHtml);
    });

    // Create the paggination
    const pagginationHtml = Array.from(trendingItem, () => {
      return `<div class="paggination"></div>`;
    });

    // Add the paggItems inside a paggination div
    trending.insertAdjacentHTML(
      "beforeend",
      `<div class="trending-paggination">
            ${pagginationHtml.join("")}
            </div>
            `
    );
    //Select the paggination divs
    const paggination = trending.querySelectorAll(".paggination");

    paggination.forEach((paggItem, index) => {
      paggItem.addEventListener("click", () => {
        //unselect the items
        trendingItem.forEach((item) =>
          item.classList.remove("trending-items-selected")
        );
        paggination.forEach((pagg) =>
          pagg.classList.remove("paggination-selected")
        );

        //select the correct item
        trendingItem[index].classList.add("trending-items-selected");
        paggination[index].classList.add("paggination-selected");
      });
    });
    //default selected items
    trendingItem[2].classList.add("carousel-items-selected");
    paggination[2].classList.add("paggination-selected");
  });

  // Blog Slider
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 680px
      680: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Mobile nav display
  const toggle = document.querySelector(".carousel-items-selected #toggle");

  toggle.addEventListener("click", function (e) {
    const nav = document.querySelector(".carousel-items-selected .nav");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  });
  //Opens submenu

  const brands = document.querySelector(".carousel-items-selected .brands");
  brands.addEventListener("click", function () {
    const moreBrands = document.querySelector(
      ".carousel-items-selected .more-brands"
    );
    moreBrands.classList.toggle("display");
    if (moreBrands.classList.contains("display")) {
      this.style.background = "rgb(49,49,52)";
    } else {
      this.style.background = "unset";
    }
  });
};

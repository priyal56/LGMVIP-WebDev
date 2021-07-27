function scrollL() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft -= step;
  }
  
  function scrollR() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft += step;
  }
  
  function getScrollVal() {
    setTimeout(() => {
      let x = document.getElementsByClassName("row_posters")[0];
      let el = document.getElementsByClassName("left_arrow")[0];
      if (x.scrollLeft == 0) {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
      let el2 = document.getElementsByClassName("right_arrow")[0];
      let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
      if (right <= 2) {
        el2.style.display = "none";
      } else {
        el2.style.display = "flex";
      }
    }, 550);
  }
  
  getScrollVal();
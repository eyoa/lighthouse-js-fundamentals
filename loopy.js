for (let l = 100; l <= 200; l++){
  if (l % 3 === 0 && l % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (l % 3 === 0) {
    console.log("Loopy");
  } else if (l % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(l);
  }

}
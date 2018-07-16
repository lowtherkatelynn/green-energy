//  function preloader() {
//      const imagesList = [
//           "../img/recycle.png",
//           "../img/sun.png",
//           "../img/windmill.png"
//        ];
//      const images = [];
//      for (let i = 0; i < imagesList.length; i++) {
//          images[i] = new Image();
//          images[i].src = imagesList[i];
//      }
//
//  };
//  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
//
//  window.addEventListener("load", preload);


const btnlist = document.querySelectorAll("button");
const container = document.getElementsByClassName("content");

let contents = {
    sun: {
        title: "The Sun Yo",
        url: "./img/sun.png",
        bodyTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget odio purus. Sed vulputate sem vitae mi finibus, eu venenatis ipsum viverra. Curabitur augue ex, feugiat in bibendum fermentum, imperdiet vitae elit. Vivamus arcu metus, faucibus id iaculis non, commodo eu velit. Curabitur interdum eleifend eros, vitae auctor leo interdum nec. Duis sagittis risus id turpis placerat, non congue ex dignissim. Aliquam tempor fringilla tellus, sit amet vestibulum lacus efficitur in."
    },
    recycle: {
        title: "Pls Recycle",
        url: "./img/recycle.png",
        bodyTxt: "Phasellus mollis nulla nunc, in luctus leo ultrices nec. Nullam suscipit dui lectus, a tristique sapien gravida sed. Nulla auctor nisl ac consectetur varius. In pulvinar varius urna eget mattis. Mauris in feugiat nibh. Pellentesque pellentesque posuere ante sit amet rutrum. Phasellus commodo fringilla gravida. Integer nunc velit, ullamcorper ut risus in, dignissim eleifend felis."
    },
    windmill: {
        title: "They're neat",
        url: "./img/windmill.png",
        bodyTxt: "Nullam cursus quam vitae augue vulputate, eu fringilla justo faucibus. Aliquam ut viverra sapien, ac accumsan arcu. Vivamus suscipit maximus dolor, nec eleifend metus sodales in. Cras iaculis porta facilisis. Etiam malesuada aliquam neque, et luctus velit lobortis quis. Aenean est enim, tincidunt eu felis in, sodales vestibulum mauris. Integer laoreet a quam ut commodo. Cras vitae placerat eros. Duis eu neque dolor. In rhoncus aliquet mi, feugiat varius massa commodo nec."
    }
}

container[0].innerHTML = `<h1>${contents.recycle.title}</h1>
                       <img src="${contents.recycle.url}" alt="" style="width:300px; height:300px; float: left;">
                       <p>${contents.recycle.bodyTxt}</p>`;



function handleClick(ev) {
    if (ev.target.getAttribute("class") === "recycle") {
        container[0].innerHTML = `<h1>${contents.recycle.title}</h1>
                       <img src="${contents.recycle.url}" alt="" style="width:300px; height:300px; float: left;"> 
                       <p>${contents.recycle.bodyTxt}</p>`;

    } else
    if (ev.target.getAttribute("class") === "sun") {
        container[0].innerHTML = `<h1>${contents.sun.title}</h1>
                       <img src="${contents.sun.url}" alt="" style="width:300px; height:300px; float: left;">
                       <p>${contents.sun.bodyTxt}</p>`;
    } else {
        container[0].innerHTML = `<h1>${contents.windmill.title}</h1>
                       <img src="${contents.windmill.url}" alt="" style="width:300px; height:300px; float: left;">
                       <p>${contents.windmill.bodyTxt}</p>`;
    }
}

for (let i = 0; i < btnlist.length; i++) {
    btnlist[i].addEventListener("click", handleClick);
}


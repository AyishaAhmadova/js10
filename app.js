function hesablapullar(məbləğ) {
  const pullar = [500, 200, 100, 50, 20, 10, 5, 1];
  let qalanMəbləğ = məbləğ;
  let netice = {};

  pullar.forEach((pul) => {
    if (qalanMəbləğ >= pul) {
      let miqdar = Math.floor(qalanMəbləğ / pul);
      qalanMəbləğ -= miqdar * pul;
      netice[pul] = miqdar;
    }
  });

  return netice;
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#pul");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let manat = parseInt(form.querySelector('[name="manat"]').value);
    let netice = hesablapullar(manat);
    let neticediv = document.getElementById("netice");
    neticediv.innerHTML = "";

    const imgPaths = {
      500: "media/500.jpg",
      200: "media/200.jpg",
      100: "media/100.jpg",
      50: "media/50.jpg",
      20: "media/20.jpg",
      10: "media/10.jpg",
      5: "media/5.jpg",
      1: "media/1.jpg",
    };

    Object.entries(netice).forEach(([pul, miqdar]) => {
      let money = document.createElement("div");
      let img = document.createElement("img");

      img.src = imgPaths[pul];
      img.alt = `${pul} AZN`;
      for (i = 0; i < miqdar; i++) {
        money.append(img.cloneNode(true));
      }

      let text = document.createElement("p");
      text.textContent = `${pul} AZN: ${miqdar} eded`;

      money.append(text);
      neticediv.append(money);
    });
  });
});

      neticediv.append(paper);
    });
  });
});

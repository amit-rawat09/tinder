// get the data
let user = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1627126974732-20973ec8b4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHNvbSUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
    displayimage:
      "https://images.unsplash.com/photo-1627126974732-20973ec8b4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHNvbSUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
    pendingmessage: 13,
    location: "Uttarakhand, India",
    name: "Amit Rawat",
    age: 19,
    interst: [
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intersts: "Music",
      },
      {
        icon: `<i class="ri-map-pin-line"></i>`,
        intersts: "Travel",
      },
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        intersts: "Cricket",
      },
    ],
    bio: "Lorem ipsum dolor sit amet elit. Amet in mollitia molestias officia, commodi ab!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D",
    displayimage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D",
    pendingmessage: 4,
    location: "Delhi, India",
    name: "Shubham",
    age: 24,
    interst: [
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intersts: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in mollitia molestias officia, commodi ab!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1627126974732-20973ec8b4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHNvbSUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
    displayimage:
      "https://images.unsplash.com/photo-1597835260780-d0ea22a9b66e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGhhbmRzb20lMjBtYW58ZW58MHwxfDB8fHww",
    pendingmessage: 12,
    location: "Uttarakhand, India",
    name: "Ankit Rawat",
    age: 21,
    interst: [
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        intersts: "Travel",
      },
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intersts: "Music",
      },
      {
        icon: `<i class="ri-paint-fill"></i>`,
        intersts: "Painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.b!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D",
    displayimage:
      "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D",
    pendingmessage: 2,
    location: "Punjab, India",
    name: "Salini",
    age: 19,
    interst: [
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        intersts: "Travel",
      },
    ],
    bio: "Lorem  amet consectetur, adipisicing elit. Amet in mollitia molestias officia, commodi ab!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhY2V8ZW58MHwxfDB8fHww",
    displayimage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhY2V8ZW58MHwxfDB8fHww",
    pendingmessage: 4,
    location: "Rajisthan, India",
    name: "Harshita",
    age: 22,
    interst: [
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        intersts: "Travel",
      },
      {
        icon: `<i class="ri-paint-fill"></i>`,
        intersts: "Painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in mollitia molestias officia, commodi ab!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayimage:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingmessage: 2,
    location: "Jammu, India",
    name: "Abhi",
    age: 25,
    interst: [
      {
        icon: `<i class="ri-map-pin-line"></i>`,
        intersts: "Cricket",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in mollitia molestias  ab!",
    isfriends: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1607758164193-19539498ddf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
    displayimage:
      "https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGFsb25lfGVufDB8fDB8fHww",
    pendingmessage: 14,
    location: "Indore, India",
    name: "Priya",
    age: 27,
    interst: [
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intersts: "Music",
      },
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        intersts: "Travel",
      },
      {
        icon: `<i class="ri-map-pin-line"></i>`,
        intersts: "Cricket",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in mollitia molestcia, commodi ab!",
    isfriends: null,
  },
];

let curr = 0;
let isAnimating = false;

function select(e) {
  return document.querySelector(e);
}

function setData(index) {
  select(".prflimg img").src = user[index].profilepic;
  select(".badges h5").innerHTML = user[index].pendingmessage;
  select(".location h3").innerHTML = user[index].location;
  select(".name h1").innerHTML = user[index].name;
  select(".name .age").innerHTML = user[index].age;

  var clutter = "";
  user[index].interst.forEach((e) => {
    clutter += `<div
    class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3"
  >
    ${e.icon}
    <h3 class="first text-sm tracking-tight">${e.intersts}</h3>
  </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").innerHTML = user[index].bio;
}

(function setinitial() {
  select(".maincard img").src = user[curr].displayimage;
  select(".incomingcard img").src = user[curr + 1].displayimage;

  setData(curr);
  curr = 2;
})();

function imagechange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false; 
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === user.length) curr = 0;
        select(".maincard img").src = user[curr].displayimage;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", () => {
  imagechange();
  setData(curr-1);
  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
accept.addEventListener("click", () => {
  imagechange();
  setData(curr-1);
  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
(function containerCreater() {
  document.querySelectorAll(".element").forEach(function (e) {
    let div = document.createElement("div");
    div.classList.add(`${e.classList[1]}container`, `overflow-hidden`);
    div.appendChild(e);
    select(".details").appendChild(div);
  });
})();

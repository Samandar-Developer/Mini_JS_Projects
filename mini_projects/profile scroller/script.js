const data = [
  { 
    image:"https://images.unsplash.com/photo-1676288785587-0d4398fbf38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    username:"Lera Kris",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda ea, rerum excepturi nam corrupti, dolores sit nostrum hic aut vitae doloremque. Obcaecati hic perspiciatis earum illo officia. Dolores, vero aliquid error commodi inventore ipsa harum asperiores facilis nisi obcaecati veritatis necessitatibus quos, autem cupiditate!",
    age:27,
    lookingFor:"male",
    city:"West Austinbury",
    job:"Photographer"
  },
  {
    image:"https://images.unsplash.com/photo-1675253264487-bf2dda3a536b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    username:"Savanah Gulgowski",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda ea, rerum excepturi nam corrupti, dolores sit nostrum hic aut vitae doloremque.",
    age: 25,
    lookingFor:"female",
    city:"Keelingstad",
    job:"Developer"
  },
  {
    image:"https://images.unsplash.com/photo-1675665307928-1b7eec8f9745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    username:"Julia Thompson",
    description:"Obcaecati hic perspiciatis earum illo officia. Dolores, vero aliquid error commodi inventore ipsa harum asperiores facilis nisi obcaecati veritatis necessitatibus quos, autem cupiditate! Nam praesentium nostrum repudiandae exercitationem alias quae aliquam quidem laborum blanditiis repellat molestias vel, unde debitis magni, ipsum quibusdam nihil dignissimos nulla reprehenderit veritatis ratione doloremque ad autem? Deserunt.",
    age: 29,
    lookingFor:"male",
    city:"Deonville",
    job:"Account"
  },
  {
    image: "https://images.unsplash.com/photo-1675542297439-69b7d9625682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    username:"James Russel",
    description:"Nulla, impedit ea. Est in alias maxime labore eius perferendis esse voluptates explicabo fugit vero soluta, ab culpa, inventore totam temporibus a dolorem nobis natus unde",
    age: 33,
    lookingFor:"female",
    city:"Murraytown",
    job:"business manager"
  }
];

const profile = profileIterator(data);

document.getElementById("next-btn").addEventListener("click", nextProfile);

function nextProfile(){
  const name = document.getElementById("user-name");
  const image = document.getElementById("user-image");
  const description = document.getElementById("user-description");
  const age = document.getElementById("user-age");
  const lookingFor = document.getElementById("user-looking-for");
  const city = document.getElementById("user-city");
  const job = document.getElementById("user-job");
  const userData = profile.next();
  if(!userData.done){
    image.src = userData.value.image;
    name.innerHTML = userData.value.username;
    description.innerHTML = userData.value.description;
    age.innerHTML = userData.value.age;
    lookingFor.innerHTML = userData.value.lookingFor;
    city.innerHTML = userData.value.city;
    job.innerHTML = userData.value.job;
  }else{
    window.location.reload();
  }

}

function profileIterator(profiles){
  let nextIndex = 0;
  
  return {
    next:function(){
      return nextIndex < profiles.length ?
      {value:profiles[nextIndex++], done:false} :
      {done:true};
    }
  };
}
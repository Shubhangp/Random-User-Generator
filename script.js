const btn = document.getElementById('generate');
const spinner = document.querySelector('.spinner');

function fetchUser(){
  spinner.style.display = 'block';
  fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => {
    displayUser(data.results[0]);
  })
  // .catch((err) => console.log(err))
  .finally(()=> spinner.style.display = 'none')

}

function displayUser(user){
    const userDisplay = document.querySelector('#user');
    
    if(user.gender === 'female') {
        document.body.style.backgroundColor = '#FE01FA';
    }else {
        document.body.style.backgroundColor = '#019CFE'
    }

    userDisplay.innerHTML = `
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.title}. ${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.cell}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.state}, ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.gender}</p>
            </div>
          </div>
        </div>`;
}

btn.addEventListener('click', fetchUser);
fetchUser();
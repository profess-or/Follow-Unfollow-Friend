
      
      const addFriend = document.getElementById("add-friend");
      const addBtnDropdown = document.getElementById('add-btn-dropdown')
      let check = 2;
      addFriend.addEventListener("click", () => {
        if (check % 2==0) {
          
          addFriend.innerHTML = "Following 👍";
          addFriend.style.backgroundColor = "lightgreen";
          check+=1
          console.log(check);
          addBtnDropdown.style.display = "none";
        }
        else{
            addBtnDropdown.style.display = "block";
            check+=1
            console.log(check);
        }
      });
      

      document.getElementById('block').addEventListener('click',()=>{
        addFriend.innerHTML = "Blocked";
        addFriend.style.backgroundColor = 'red';
        addBtnDropdown.style.display = "none";
      })

      document.getElementById('unfollow').addEventListener('click',()=>{
        addFriend.innerHTML = "Follow";
        addFriend.style.backgroundColor = "skyblue";
        addBtnDropdown.style.display = "none";
      })
  
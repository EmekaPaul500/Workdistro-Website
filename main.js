let footer = document.getElementById("footerTarget");
let contactTrigger = document.getElementById("contactTrigger");
let form = document.getElementById("formTarget");
let formTrigger = document.querySelectorAll(".formTrigger");
let join = document.getElementById("join");
let perror = document.querySelector(".error");
let mama = join.innerHTML;
console.log(join);
console.log(formTrigger);
contactTrigger.addEventListener("click", () => {
  console.log("kk");
  footer.scrollIntoView({ behavior: "smooth" });
});

formTrigger.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("kk");
    form.scrollIntoView({ behavior: "smooth" });
  });
});
const submit = async () => {
  let fname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let interest = document.getElementById("interest").value;
  let number = document.getElementById("number").value;

  try {
    join.disabled = true;
    join.innerHTML = "Submitting...";
    perror.textContent = "";
    const response = await fetch(
      `https://workdistro-mqpp.onrender.com/api/wait-list/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json", // specify the content type
          // other headers if needed
        },
        body: JSON.stringify({
          name: fname,
          interest: interest,
          email: email,
          phone_number: number,
        }),
      }
    );
    console.log(response);
    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    if (response.ok) {
      return true;
    }
  } catch (error) {
    error = error.message;
    if (error == 400) {
      perror.textContent = "Please,Ensure that you filled all  required inputs";
    } else if (error == 450) {
      perror.textContent = "Please ensure that your form  details is valid";
    } else if (error == 409) {
      perror.textContent = "You have joined the waitlist already with " + email;
    } else if (error == 500) {
      perror.textContent =
        "It seems there is an issue with our server, recheck your details and try again";
    } else {
      perror.textContent =
        "An error occured, Please recheck your details and try again";
    }
  } finally {
    join.disabled = false;
    join.innerHTML = mama;
  }
};

join.addEventListener("click", (e) => {
  e.preventDefault();
  let number = document.getElementById("number").value;
  let fname = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (fname.trim() == "") {
    perror.textContent = "We sure do need your Name";

    return;
  } else if (email.trim() == "") {
    perror.textContent = "We sure do need your Email Address";
    return;
  } else if (isNaN(number) || number.length !== 11) {
    console.log("nawa");
    perror.textContent = "Your phone number is not valid";
    return;
  }
  submit()
    .then((e) => {
      if (e == true) {
        alert(
          "You have joined our waitlist, check your mail we sent you a message"
        );
      }
    })
    .catch((e) => {
      perror = "An unknown error occured, try again";
    });
});

const openFormBtn = document.getElementById("openForm");
const closeFormBtn = document.getElementById("closeForm");
const formContainer = document.getElementById("popupForm");

openFormBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
});

closeFormBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const formData = new FormData(contactForm);

    try {
        const response = await fetch("https://getform.io/f/nbvvqxpb", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            console.log("Form submitted successfully");
            formContainer.style.display = "none";
        } else {
            console.error("Form submission failed");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img');
    const dots = document.querySelectorAll('.dot');
    
    images.forEach((img, index) => {
        img.addEventListener('mouseover', () => {
            images.forEach(i => i.classList.remove('show-content'));
            img.classList.add('show-content');
            
            dots.forEach(dot => dot.style.backgroundImage = 'url(./img/3.svg)');
            dots[index].style.backgroundImage = 'url(./img/1@2x.png)';
        });
        
        img.addEventListener('mouseout', () => {
            if (index === 2) { // Ensure img3 retains content
                img.classList.add('show-content');
            }
        });
    });
});



const contents = document.querySelectorAll('.project_detail > div');
const images = document.querySelectorAll('.project-img > img');

let activeContent = document.querySelector('.content2');

contents.forEach((content, index) => {
  content.addEventListener('click', () => {
    if (activeContent !== content) {
      activeContent.classList.remove('active');
      content.classList.add('active');
      activeContent = content;
    }

    images.forEach(img => img.classList.remove('active', 'hidden'));
    images[index].classList.add('active');
    images.forEach((img, i) => {
      if (i !== index) img.classList.add('hidden');
    });
  });
});


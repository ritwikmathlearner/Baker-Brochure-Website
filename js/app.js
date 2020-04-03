document.getElementById('logo').addEventListener('click', ()=>{
    window.location.replace("index.html");
})

const contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    for(let i = 0; i <= 3; i++)
    {
        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
        if(contactForm.children[i].value === '')
        {            
            let fieldName = capitalize(contactForm.children[i].getAttribute('ID'));
            alert(`${fieldName} is empty`);
            break;
        } else {
            if(i === 0) {
                let name = capitalize(contactForm.children[0].value);
                alert(`${name} your message has been sumitted`);
            }            
            contactForm.children[i].value='';
        }
    }
})
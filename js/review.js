const reviewForm = document.querySelector('form');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    if (name == '' || review == '' || rating == '') {
        alert('Please fill in all fields.');
    }
    else {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
;
        li.style.border="2px solid #ccc";
        li.style.margin="1rem 0";
        li.style.padding="1rem";

        span.style.backgroundColor="#501802";
        span.style.color="#fff";
        span.style.display="inline-block";
        span.style.padding="0.25rem 0.5rem";

        h3.innerHTML = name;
        p.innerHTML = review;
        span.innerHTML = `${rating}/5`;

        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        reviewList.appendChild(li);

        reviewForm.reset();
    }
});

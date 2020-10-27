
let counter = 0;

const data = [
    {
        title: 'Title Product 1',
        where: 'Moscow, Russia'
    },
    {
        title: 'Title Product 2',
        where: 'Kiev, ukraine'
    },
    {
        title: 'Title Product 3',
        where: 'Manchster, England'
    }
]


const marketing = document.querySelector('.marketing');

const closeMarketing = () => {
    marketing.classList.remove('marketing--visible');
}

marketing.addEventListener('click', (e) => {
    if(e.target.classList.contains('marketing__close')) {
        closeMarketing();
    }
});


const changeMarketingData = () => {

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    document.querySelector('.marketing__title').textContent = stringTitle;
    document.querySelector('.marketing__subtitle').textContent = stringWhere;

    counter++;

    if(counter === data.length) {
        counter = 0;
    }
}

changeMarketingData();

setInterval(changeMarketingData, 3000);
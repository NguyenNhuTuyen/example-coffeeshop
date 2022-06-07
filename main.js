const tabs = document.querySelectorAll('.tabs-item')
const contents = document.querySelectorAll('.contents-item')
// const tabActice = document.querySelector('.tabs-item.active')
// const contentActice = document.querySelector('.contents-item.active')


tabs.forEach(function(tab, i) {
    const content = contents[i];
    tab.onclick = (function() {
        document.querySelector('.tabs-item.active').classList.remove('active')
        document.querySelector('.contents-item.active').classList.remove('active')
        this.classList.add('active')
        content.classList.add('active')
    })
})
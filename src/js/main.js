window.addEventListener('DOMContentLoaded', () => { 
    const tabs = document.querySelectorAll('.btn')
    const tabsParent = document.querySelector('.content__sale')
    
    function hideActive() {
        tabs.forEach(item => {
            item.classList.remove('active')
        });
    }

    function showActive(i = 0) {
        tabs[i].classList.add('active')
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target

        if (target && target.classList.contains('btn')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideActive()
                    showActive(i)                            
                    
                }
                if (target.id === 'sale') {
                    sortBySaleFilter = true
                    PlaceFilterChange()
                } else if (target.id === 'fast') {
                    sortBySaleFilter = false
                    PlaceFilterChange()
                }
            });
        }
    })

    let sortBySaleFilter = true
    //let sortByFastFilter = false

    function SortBySale(tickets) {
        for (let i = 0; i < 5; i++) {
            document.querySelector('.content__tickets').remove();
        }        
        const ticketsNew = [...tickets.sort((a, b) => a.price - b.price)]
        createCard(ticketsNew)
    }
    function SortByFast(tickets) {
        sortBySaleFilter = false
        const ticketsNew = [...tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)] 
        for (let i = 0; i < 5; i++) {
            document.querySelector('.content__tickets').remove();
        }
        createCard(ticketsNew)
    }
    function SortFilterСheck(alltickets) {
        if (sortBySaleFilter) {
            SortBySale(alltickets)
        } else {
            SortByFast(alltickets)
        }
    }

    //filter left
    const all = document.getElementById('all')
    const notchange = document.getElementById('notchange')
    const change1 = document.getElementById('change1')
    const change2 = document.getElementById('change2')
    const change3 = document.getElementById('change3')

    function checkResetAll() {        
        notchange.checked = false
        change1.checked = false
        change2.checked = false
        change3.checked = false
    }

    function checkReset() {
        all.checked = false
    }

    let placeFilterChangeRun = false

    function PlaceFilterChange() {
        placeFilterChangeRun = true    
        
        if (all.checked) {
            SortFilterСheck(tickets)
        }

        if (notchange.checked && change1.checked && change2.checked && change3.checked) {
            checkResetAll()
            all.checked = true
            SortFilterСheck(tickets)
        } else if (notchange.checked && change1.checked  && change2.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 0)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 1)
            const ticketsNew2 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1, ...ticketsNew2]
            SortFilterСheck(ticketsNew)
        } else if (notchange.checked && change1.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 0)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 1)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        } else if (notchange.checked && change2.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 0)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        } else if (notchange.checked && change3.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 0)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 3)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        } else if (notchange.checked) {
            checkReset()
            ticketsNew = tickets.filter((el) => el.segments[0].stops.length === 0)
            SortFilterСheck(ticketsNew)           
        } else if (change1.checked  && change2.checked && change3.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 1)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew2 = tickets.filter((el) => el.segments[0].stops.length === 3)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1, ...ticketsNew2]
            SortFilterСheck(ticketsNew)
        } else if (change1.checked  && change2.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 1)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        } else if (change1.checked  && change3.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 1)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 3)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        } else if (change1.checked) {
            checkReset()
            ticketsNew = tickets.filter((el) => el.segments[0].stops.length === 1)
            SortFilterСheck(ticketsNew)
        } else if (change2.checked  && change3.checked) {
            checkReset()
            const ticketsNew0 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew1 = tickets.filter((el) => el.segments[0].stops.length === 2)
            const ticketsNew = [...ticketsNew0, ...ticketsNew1]
            SortFilterСheck(ticketsNew)
        }   else if (change2.checked) {
            checkReset()
            ticketsNew = tickets.filter((el) => el.segments[0].stops.length === 2)
            SortFilterСheck(ticketsNew)
        } 
        else if (change3.checked) {
            checkReset()
            ticketsNew = tickets.filter((el) => el.segments[0].stops.length === 3)
            SortFilterСheck(ticketsNew)
        } else {
            all.checked = true
            SortFilterСheck(tickets)
        }

    }

    all.addEventListener('click', (event) => {        
        checkResetAll()        
        PlaceFilterChange()        
    })
    notchange.addEventListener('click', (event) => {        
        PlaceFilterChange()        
    })  
    change1.addEventListener('click', (event) => {
        PlaceFilterChange()
    }) 
    change2.addEventListener('click', (event) => {
        PlaceFilterChange()
    }) 
    change3.addEventListener('click', (event) => {
        PlaceFilterChange()
    })


    

    const getResourse = async (url, data) => {
        const res = await fetch(url);        

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    let tickets = []

    getResourse('http://localhost:3000/tickets')
            .then(data => {
                tickets = data
                const newTickets = data.sort((a, b) => a.price - b.price)
                createCard(newTickets)
                return tickets
            });

    function createCard(tickets) {

        const priceConvert = (price) => {
            const prStr = price.toString();
            return `${prStr.slice(0,2)} ${prStr.slice(2,5)}`;
        }        
        
        for (let i = 0; i < 5; i++) {            
            const element = document.createElement('div');
            
            const newPrice = priceConvert(tickets[i].price)
            
            function ticketsDraw(j) {
                const origin = tickets[i].segments[j].origin
                const destination = tickets[i].segments[j].destination

                //duration
                const duration = tickets[i].segments[j].duration
                const dHours = Math.floor((Number(duration) / 60))
                const dMin = Number(duration) - (dHours * 60)
                const durationText = `${dHours}ч ${dMin}м`

                //date start
                const hStart = new Date(tickets[i].segments[j].date);
                let hStartMin = minutesConvert(hStart.getUTCMinutes())          
                
                function minutesConvert() {
                    let hStartMinConvert = ''
                    if (hStart.getUTCMinutes() > 0 && hStart.getUTCMinutes() < 10) {
                        hStartMinConvert = `0${hStart.getUTCMinutes()}`
                    } else if (hStart.getUTCMinutes() == 0) {
                        hStartMinConvert = `0${hStart.getUTCMinutes()}`
                    } else {
                        hStartMinConvert = hStart.getUTCMinutes()
                    }
                    return hStartMinConvert
                }
                const hStartText = `${hStart.getUTCHours()}:${hStartMin}`

                //date end                      
                const hEnd = new Date(hStart.setUTCHours(hStart.getUTCHours()+dHours));
                const hEndFull = new Date(hEnd.setUTCMinutes(hEnd.getUTCMinutes()+dMin))
                const hEndText = `${hEndFull.getUTCHours()}:${minutesConvert(hEndFull.getMinutes())}`

                // stops
                let stopsText = ""
                const stops = tickets[i].segments[j].stops.length
                const stopPlace = tickets[i].segments[j].stops
                switch (stops) {
                    case 0:
                        stopsText = `Без пересадок`
                        break
                    case 1:
                        stopsText = `${stops} пересадка`
                        break
                    case 2:
                        stopsText = `${stops} пересадки`
                        break
                    case 3:
                        stopsText = `${stops} пересадки`
                        break
                }

                const ticket = element.innerHTML = `
                            <div class="content__tickets__list">
                                <div class="content__tickets__path-item">
                                    <div class="tickets__title">${origin} – ${destination}</div>
                                    <div class="tickets__desr">${hStartText} – ${hEndText}</div>
                                </div>
                                <div class="content__tickets__path-item">
                                    <div class="tickets__title">В пути</div>
                                    <div class="tickets__desr">${durationText}</div>
                                </div>
                                <div class="content__tickets__path-item">
                                    <div class="tickets__title">${stopsText}</div>
                                    <div class="tickets__desr">${stopPlace}</div>
                                </div>
                            </div>
                `
                return ticket
            }

            const ticket1 = ticketsDraw(0)
            const ticket2 = ticketsDraw(1)

            
            
                      
            element.classList.add('content__tickets')
            element.innerHTML = `
                        <div class="content__tickets__wrapper">                  
                            <div class="content__tickets__title">
                                <div class="content__tickets__price">${newPrice} Р</div>
                                <div class="content__tickets__img">
                                    <img src="/src/img/S7_Logo.png" alt="compony logo">
                                </div>
                            </div>
                            ${ticket1}
                            ${ticket2}
                        </div>
            `
            document.querySelector('.content__tickets-list').append(element);
        }
    }
    
})
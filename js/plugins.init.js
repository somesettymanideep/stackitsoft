/* Template Name: Cryptor - NFT Marketplace & Cryptocurrency ICO Landing Page HTML Template
   Author: Shreethemes
   E-mail: support@shreethemes.in
   Website: https://shreethemes.in
   Created: August 2021
   Version: 1.2.0
   File Description: Common JS file of the template(plugins.init.js)
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Tiny Slider          *
 *     02.  Countdown Js         * (For Comingsoon pages)
 *     03.  Tobii lightbox       * (For Portfolio pages)
 *     04.  Fade Animation       * 
 *     05.  Shuffle JS           *
 ================================*/
         
//=========================================//
/*            01) Tiny slider              */
//=========================================//

if(document.getElementsByClassName('tiny-two-item').length > 0) {
    var slider = tns({
        container: '.tiny-two-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 2
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-three-item').length > 0) {
    var slider = tns({
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-four-item').length > 0) {
    var slider = tns({
        container: '.tiny-four-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false,
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-four-item-nav-arrow').length > 0) {
    var slider = tns({
        container: '.tiny-four-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-five-item').length > 0) {
    var slider = tns({
        container: '.tiny-five-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 5
            },

            767: {
                items: 3
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-six-item').length > 0) {
    var slider = tns({
        container: '.tiny-six-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 12,
        responsive: {
            1025: {
                items: 6
            },

            992: {
                items: 5
            },

            767: {
                items: 4
            },

            575: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

//=========================================//
/*/*            02) Countdown js           */
//=========================================//

try {
    if(document.getElementById("days")){
        // The data/time we want to countdown to
        var eventCountDown = new Date("November 15, 2023 16:37:52").getTime();

        // Run myfunc every second
        var myfunc = setInterval(function () {

            var now = new Date().getTime();
            var timeleft = eventCountDown - now;

            // Calculating the days, hours, minutes and seconds left
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            // Result is output to the specific element
            document.getElementById("days").innerHTML = days + "<p class='count-head'>Days</p> "
            document.getElementById("hours").innerHTML = hours + "<p class='count-head'>Hours</p> "
            document.getElementById("mins").innerHTML = minutes + "<p class='count-head'>Mins</p> "
            document.getElementById("secs").innerHTML = seconds + "<p class='count-head'>Secs</p> "

            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval(myfunc);
                document.getElementById("days").innerHTML = ""
                document.getElementById("hours").innerHTML = ""
                document.getElementById("mins").innerHTML = ""
                document.getElementById("secs").innerHTML = ""
                document.getElementById("end").innerHTML = "00:00:00:00";
            }
        }, 1000);
    }
} catch (err) {

}

//=========================================//
/*/*            03) Tobii lightbox         */
//=========================================//

try {
    const tobii = new Tobii()
} catch (err) {

}

//=========================================//
/*/*            04) Fade Animation         */
//=========================================//

try {
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1000
    });
} catch (err) {

}

//=========================================//
/*/*            05) Shuffle JS             */
//=========================================//

try {
    var Shuffle = window.Shuffle;

    class Demo {
        constructor(element) {
            if(element){
                this.element = element;
                this.shuffle = new Shuffle(element, {
                    itemSelector: '.picture-item',
                    sizer: element.querySelector('.my-sizer-element'),
                });

                // Log events.
                this.addShuffleEventListeners();
                this._activeFilters = [];
                this.addFilterButtons();
            }
        }

        /**
         * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
         * for them like you normally would (with jQuery for example).
         */
        addShuffleEventListeners() {
            this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
                console.log('layout. data:', data);
            });
            this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
                console.log('removed. data:', data);
            });
        }

        addFilterButtons() {
            const options = document.querySelector('.filter-options');
            if (!options) {
                return;
            }

            const filterButtons = Array.from(options.children);
            const onClick = this._handleFilterClick.bind(this);
            filterButtons.forEach((button) => {
                button.addEventListener('click', onClick, false);
            });
        }

        _handleFilterClick(evt) {
            const btn = evt.currentTarget;
            const isActive = btn.classList.contains('active');
            const btnGroup = btn.getAttribute('data-group');

            this._removeActiveClassFromChildren(btn.parentNode);

            let filterGroup;
            if (isActive) {
                btn.classList.remove('active');
                filterGroup = Shuffle.ALL_ITEMS;
            } else {
                btn.classList.add('active');
                filterGroup = btnGroup;
            }

            this.shuffle.filter(filterGroup);
        }

        _removeActiveClassFromChildren(parent) {
            const { children } = parent;
            for (let i = children.length - 1; i >= 0; i--) {
                children[i].classList.remove('active');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        window.demo = new Demo(document.getElementById('grid'));
    });
} catch (err) {

}


//=========================================//
/*/*            06) Selectr             */
//=========================================//
try {
    new Selectr('#select-items', {  searchable: false,  });
} catch (error) {
    
}

//=========================================//
/*/*            07) Swicher             */
//=========================================//
try {
    function toggleSwitcher() {
        var i = document.getElementById('style-switcher');
        if (i.style.left === "-189px") {
            i.style.left = "0px";
        } else {
            i.style.left = "-189px";
        }
    };

    function setColor(theme) {
        document.getElementById('color-opt').href = './css/colors/' + theme + '.css';
        toggleSwitcher(false);
    };

    function setTheme(theme) {
        document.getElementById('theme-opt').href = './css/' + theme + '.min.css';
        toggleSwitcher(false);
    };
} catch (error) {
    
}

//=========================================//
/*/*            08) Data Counter           */
//=========================================//

try {
    const counter = document.querySelectorAll('.counter-value');
    const speed = 2500; // The lower the slower

    counter.forEach(counter_value => {
        const updateCount = () => {
            const target = +counter_value.getAttribute('data-target');
            const count = +counter_value.innerText;

            // Lower inc to slow and higher to slow
            var inc = target / speed;

            if (inc < 1) {
                inc = 1;
            }

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter_value
                counter_value.innerText = (count + inc).toFixed(0);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter_value.innerText = target;
            }
        };

        updateCount();
    });
} catch (err) {

}
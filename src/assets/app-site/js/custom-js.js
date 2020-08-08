
      /*tab*/
$(document).ready(function() {
    var tabCarousel = setInterval(function () {

        var tabs = $('.nav-tabs > a');
        active = tabs.filter('.active');
        next = active.next('a');
        // console.log(next);
        toClick = next.length ? next : tabs.eq(0);

        toClick.trigger('click');
    }, 3000);
});





      /*slider*/
$(document).ready(function() {

    $('body').bootstrapMaterialDesign();
});

function call() {
    var randTag=$('.randTag').children('.col-3');
    return  random=myRandom(0,randTag.length);
}

function myRandom(start,end){
    randomNumber = start + Math.floor(Math.random() * (end-start));
    return randomNumber;
}

function hide_show() {
    var befor_rand=$("input[name='rand']").val();
    var teg=$('.randTag .col-3').eq(befor_rand).removeClass('active');
    // alert(teg);
    var now=call();

    $('.randTag .col-3').eq(now).addClass('active');
    $("input[name='rand']").val(now);

}

setInterval(hide_show,1500);
var sliderTag = $('.slider');
var sliderItems = sliderTag.find('.item');
var slideCount = sliderItems.length;
var nextSlide = 1;
var slidernavigatourActive = sliderTag.find('.slide_menu ul li');
var timeOut = 3000;
function slider(){
    if(nextSlide > slideCount) {
        nextSlide = 1;
    }
    if (nextSlide < 1)  {
        nextSlide = slideCount;
    }
    sliderItems.fadeOut(200);
    sliderItems.eq(nextSlide - 1).fadeIn(600);
    slidernavigatourActive.removeClass('active_slide');
    slidernavigatourActive.eq(nextSlide - 1).addClass('active_slide');
    nextSlide++;

}


slider();
var sliderInterval = setInterval(slider, timeOut);

sliderTag.mouseleave(function () {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slider, timeOut);
});

function nextSlid(){
    slider();
}
function prevSlide(){
    nextSlide = nextSlide - 2;
    slider();
}
function slideClick(index){
    nextSlide = index;
    slider();
}
$('.slider .slide_menu li').click(function () {
    clearInterval(sliderInterval);
    var index = $(this).index();
    slideClick(index + 1);
});
$('.next').click(function () {
    clearInterval(sliderInterval);
    nextSlid();
});
$('.prev').click(function () {
    clearInterval(sliderInterval);
    prevSlide();
});
const slide = {
    main : null,
    elementImg : null,
    imgSelected : 0,
    nextSlide: function (){
        if (this.imgSelected != null)
        {
            if (this.imgSelected < (this.elementImg.length - 1))
            {
                this.imgSelected++;
                this.normalizeSlide();
            }
        }
    },
    prevSlide: function (){
        if (this.imgSelected != null)
        {
            if (this.imgSelected > 0)
            {
                this.imgSelected--;
                this.normalizeSlide();
            }
        }
    },
    normalizeSlide: function (){

        for (num = 0; num < this.elementImg.length; num++)
        {
            this.elementImg[num].classList.remove("hideLeft","prevLeftSecond","prev","selected","next","nextRightSecond","hideRight");
        }

        this.elementImg[this.imgSelected].classList.add("selected");

        if (this.imgSelected > 2)
        {
            this.elementImg[this.imgSelected-2].classList.add("hideLeft");
            this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
            this.elementImg[this.imgSelected-1].classList.add("prev");
        }
        else if (this.imgSelected > 1)
        {
            this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
            this.elementImg[this.imgSelected-1].classList.add("prev");
        }
        else if (this.imgSelected > 0)
        {
            this.elementImg[this.imgSelected-1].classList.add("prev");
        }

        if ((this.imgSelected + 3) < this.elementImg.length)
        {
            this.elementImg[this.imgSelected+3].classList.add("hideRight");
            this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
            this.elementImg[this.imgSelected+1].classList.add("next");
        }
        else if ((this.imgSelected + 2) < this.elementImg.length)
        {
            this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
            this.elementImg[this.imgSelected+1].classList.add("next");
        }
        else if((this.imgSelected + 1) < this.elementImg.length)
        {
            this.elementImg[this.imgSelected+1].classList.add("next");
        }
    }
}
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
}

//It is used to get some elements from btn
function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
}

});
$(document).ready(function(){
    $(".text").slideUp(0);
    // $(".txt:first").addClass("active1");
    $(".txt").click(function(){
        $(this).toggleClass("active1").siblings(".txt").removeClass("active1");
        $(this).next(".text").slideToggle(700).siblings(".text").slideUp(700);
    })
});
$(document).ready(function(){
    $(".text").slideUp(0);
    // $(".txt:first").addClass("active1");
    $(".check").click(function(){
        $(this).toggleClass("active1").siblings(".check").removeClass("active1");
        $(this).parent('.check_parent').parent('.check-parent').next(".text").slideToggle(500).siblings(".text").slideUp(500);
    })
});
(function($) {

        "use strict";

        var DEBUG = false, // make true to enable debug output
            PLUGIN_IDENTIFIER = "RangeSlider";

        var RangeSlider = function( element, options ) {
            this.element = element;
            this.options = options || {};
            this.defaults = {
                output: {
                    prefix: '', // function or string
                    suffix: '', // function or string
                    format: function(output){
                        return output;
                    }
                },
                change: function(event, obj){}
            };
            // This next line takes advantage of HTML5 data attributes
            // to support customization of the plugin on a per-element
            // basis.
            this.metadata = $(this.element).data('options');
        };

        RangeSlider.prototype = {

            ////////////////////////////////////////////////////
            // Initializers
            ////////////////////////////////////////////////////

            init: function() {
                if(DEBUG && console) console.log('RangeSlider init');
                this.config = $.extend( true, {}, this.defaults, this.options, this.metadata );

                var self = this;
                // Add the markup for the slider track
                this.trackFull = $('<div class="track track--full"></div>').appendTo(self.element);
                this.trackIncluded = $('<div class="track track--included"></div>').appendTo(self.element);
                this.inputs = [];

                $('input[type="range"]', this.element).each(function(index, value) {
                    var rangeInput = this;
                    // Add the ouput markup to the page.
                    rangeInput.output = $('<output>').appendTo(self.element);
                    // Get the current z-index of the output for later use
                    rangeInput.output.zindex = parseInt($(rangeInput.output).css('z-index')) || 1;
                    // Add the thumb markup to the page.
                    rangeInput.thumb = $('<div class="slider-thumb">').prependTo(self.element);
                    // Store the initial val, incase we need to reset.
                    rangeInput.initialValue = $(this).val();
                    // Method to update the slider output text/position
                    rangeInput.update = function() {
                        if(DEBUG && console) console.log('RangeSlider rangeInput.update');
                        var range = $(this).attr('max') - $(this).attr('min'),
                            offset = $(this).val() - $(this).attr('min'),
                            pos = offset / range * 100 + '%',
                            transPos = offset / range * -100 + '%',
                            prefix = typeof self.config.output.prefix == 'function' ? self.config.output.prefix.call(self, rangeInput) : self.config.output.prefix,
                            format = self.config.output.format($(rangeInput).val()),
                            suffix = typeof self.config.output.suffix == 'function' ? self.config.output.suffix.call(self, rangeInput) : self.config.output.suffix;

                        // Update the HTML
                        $(rangeInput.output).html(prefix + '' + format + '' + suffix);
                        $(rangeInput.output).css('left', pos);
                        $(rangeInput.output).css('transform', 'translate('+transPos+',0)');

                        // Update the IE hack thumbs
                        $(rangeInput.thumb).css('left', pos);
                        $(rangeInput.thumb).css('transform', 'translate('+transPos+',0)');

                        // Adjust the track for the inputs
                        self.adjustTrack();
                    };

                    // Send the current ouput to the front for better stacking
                    rangeInput.sendOutputToFront = function() {
                        $(this.output).css('z-index', rangeInput.output.zindex + 1);
                    };

                    // Send the current ouput to the back behind the other
                    rangeInput.sendOutputToBack = function() {
                        $(this.output).css('z-index', rangeInput.output.zindex);
                    };

                    ///////////////////////////////////////////////////
                    // IE hack because pointer-events:none doesn't pass the
                    // event to the slider thumb, so we have to make our own.
                    ///////////////////////////////////////////////////
                    $(rangeInput.thumb).on('mousedown', function(event){
                        // Send all output to the back
                        self.sendAllOutputToBack();
                        // Send this output to the front
                        rangeInput.sendOutputToFront();
                        // Turn mouse tracking on
                        $(this).data('tracking', true);
                        $(document).one('mouseup', function() {
                            // Turn mouse tracking off
                            $(rangeInput.thumb).data('tracking', false);
                            // Trigger the change event
                            self.change(event);
                        });
                    });

                    // IE hack - track the mouse move within the input range
                    $('body').on('mousemove', function(event){
                        // If we're tracking the mouse move
                        if($(rangeInput.thumb).data('tracking')) {
                            var rangeOffset = $(rangeInput).offset(),
                                relX = event.pageX - rangeOffset.left,
                                rangeWidth = $(rangeInput).width();
                            // If the mouse move is within the input area
                            // update the slider with the correct value
                            if(relX <= rangeWidth) {
                                var val = relX/rangeWidth;
                                $(rangeInput).val(val * $(rangeInput).attr('max'));
                                rangeInput.update();
                            }
                        }
                    });

                    // Update the output text on slider change
                    $(this).on('mousedown input change touchstart', function(event) {
                        if(DEBUG && console) console.log('RangeSlider rangeInput, mousedown input touchstart');
                        // Send all output to the back
                        self.sendAllOutputToBack();
                        // Send this output to the front
                        rangeInput.sendOutputToFront();
                        // Update the output
                        rangeInput.update();
                    });

                    // Fire the onchange event
                    $(this).on('mouseup touchend', function(event){
                        if(DEBUG && console) console.log('RangeSlider rangeInput, change');
                        self.change(event);
                    });

                    // Add this input to the inputs array for use later
                    self.inputs.push(this);
                });

                // Reset to set to initial values
                this.reset();

                // Return the instance
                return this;
            },

            sendAllOutputToBack: function() {
                $.map(this.inputs, function(input, index) {
                    input.sendOutputToBack();
                });
            },

            change: function(event) {
                if(DEBUG && console) console.log('RangeSlider change', event);
                // Get the values of each input
                var values = $.map(this.inputs, function(input, index) {
                    return {
                        value: parseInt($(input).val()),
                        min: parseInt($(input).attr('min')),
                        max: parseInt($(input).attr('max'))
                    };
                });

                // Sort the array by value, if we have 2 or more sliders
                values.sort(function(a, b) {
                    return a.value - b.value;
                });

                // call the on change function in the context of the rangeslider and pass the values
                this.config.change.call(this, event, values);
            },

            reset: function() {
                if(DEBUG && console) console.log('RangeSlider reset');
                $.map(this.inputs, function(input, index) {
                    $(input).val(input.initialValue);
                    input.update();
                });
            },

            adjustTrack: function() {
                if(DEBUG && console) console.log('RangeSlider adjustTrack');
                var valueMin = Infinity,
                    rangeMin = Infinity,
                    valueMax = 0,
                    rangeMax = 0;

                // Loop through all input to get min and max
                $.map(this.inputs, function(input, index) {
                    var val = parseInt($(input).val()),
                        min = parseInt($(input).attr('min')),
                        max = parseInt($(input).attr('max'));

                    // Get the min and max values of the inputs
                    valueMin = (val < valueMin) ? val : valueMin;
                    valueMax = (val > valueMax) ? val : valueMax;
                    // Get the min and max possible values
                    rangeMin = (min < rangeMin) ? min : rangeMin;
                    rangeMax = (max > rangeMax) ? max : rangeMax;
                });

                // Get the difference if there are 2 range input, use max for one input.
                // Sets left to 0 for one input and adjust for 2 inputs
                if(this.inputs.length > 1) {
                    this.trackIncluded.css('width', (valueMax - valueMin) / (rangeMax - rangeMin) * 100 + '%');
                    this.trackIncluded.css('left', (valueMin - rangeMin) / (rangeMax - rangeMin) * 100 + '%');
                } else {
                    this.trackIncluded.css('width', valueMax / (rangeMax - rangeMin) * 100 + '%');
                    this.trackIncluded.css('left', '0%');
                }
            }
        };

        RangeSlider.defaults = RangeSlider.prototype.defaults;

        $.fn.RangeSlider = function(options) {
            if(DEBUG && console) console.log('$.fn.RangeSlider', options);
            return this.each(function() {
                var instance = $(this).data(PLUGIN_IDENTIFIER);
                if(!instance) {
                    instance = new RangeSlider(this, options).init();
                    $(this).data(PLUGIN_IDENTIFIER,instance);
                }
            });
        };

        ///


        ////

    }
)(jQuery);
let rangeSlider = ((containerSelector, minSelector, maxSelector, selectionSelector, inputCallback, changeCallback) => {
    inputCallback = inputCallback || function () { };
    changeCallback = changeCallback || function () { };
    let timeout;
    let sliderContainer = document.querySelector(containerSelector);
    let sliderMinElement = document.querySelector(minSelector);
    let sliderMaxElement = document.querySelector(maxSelector);
    let sliderSelectionElement = document.querySelector(selectionSelector);
    let values = { min: sliderMinElement.value, max: sliderMaxElement.value };

    sliderMinElement.addEventListener('input', e => {
        sliderTimeout(() => { valueChanged(e); });
    });

    sliderMaxElement.addEventListener('input', e => {
        sliderTimeout(() => { valueChanged(e); });
    });

    sliderMinElement.addEventListener('change', () => { changeCallback(values); });
    sliderMaxElement.addEventListener('change', () => { changeCallback(values); });

    return {
        setHandles: data => {
            data = data || {};

            if (data.min) {
                sliderMinElement.value = data.min;
                valueChanged({ target: sliderMinElement });
            }

            if (data.max) {
                sliderMaxElement.value = data.max;
                valueChanged({ target: sliderMaxElement });
            }
        }
    };


    function valueChanged(event) {
        if (event.target === sliderMinElement && +sliderMinElement.value >= +sliderMaxElement.value) {
            sliderMinElement.value = +sliderMaxElement.value - 5;
            return event.preventDefault();
        }

        if (event.target === sliderMaxElement && +sliderMinElement.value >= +sliderMaxElement.value) {
            sliderMaxElement.value = +sliderMinElement.value + 5;
            return event.preventDefault();
        }

        values.min = sliderMinElement.value;
        values.max = sliderMaxElement.value;

        sliderSelectionElement.style.right = +sliderMinElement.value / +sliderMaxElement.getAttribute('max') * 100 + '%';
        sliderSelectionElement.style.left = +sliderMaxElement.value / +sliderMaxElement.getAttribute('max') * -100 + 100 + '%';
        inputCallback(values);
    }

    function sliderTimeout(callback) {
        clearTimeout(timeout);
        timeout = setTimeout(callback, 10);
    }
})('.range-slider', '.range-slider-min', '.range-slider-max', '.range-slider-selection', values => {
    // console.log('values changed!', values);
    // document.querySelector('.display1').innerHTML = '₹ '+ values.min + ', ₹ ' + values.max;
    document.querySelector('.minmaxprice').value = values.min + ',' + values.max;
    document.querySelector('.minprice').innerHTML =' از ' + values.min +' تومان';
    document.querySelector('.maxprice').innerHTML =' تا ' + values.max + ' تومان' ;
}, values => {
    // console.log('change done!', values);
});

rangeSlider.setHandles({ min: 0, max: 250000 });

// console.log('inited!');

// https://seiyria.com/bootstrap-slider/#example-13
// $("#BudgetRange").slider({ min: 5000, max: 250000, value: [25000, 55000], focus: true });




          /*product count*/

function  btn2(tag) {
    var num1=$(tag).parent().find(".input-count").val();

    console.log(num1);
    // var num2=Number(num1);
    var newNum=parseInt(num1)+1;
    $(tag).parent().find(".input-count").val(newNum);
    // document.getElementById("input-count").value=newNum;
}
function  btn1(tag) {
    var num1=$(tag).parent().find(".input-count").val();

    var num2=Number(num1);

    if(num2 - 1<1){
        newNum=1
    }else{
        newNum=num2-1
    }
    $(tag).parent().find(".input-count").val(newNum);
}




      /*form*/
$('#sendForm').click(function(){
    $('#select-star').text($("input[type=radio]:checked").val() + ' star selected!');
});



      /*Points*/

function animateElements() {
            $('.progressbar').each(function () {
                var elementPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                var percent = $(this).find('.circle').attr('data-percent');
                var animate = $(this).data('animate');
                if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                    $(this).data('animate', true);
                    $(this).find('.circle').circleProgress({
                        // startAngle: -Math.PI / 2,
                        value: percent / 100,
                        size : 400,
                        thickness: 15,
                        fill: {
                            color: '#a5d122'
                        }
                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                        $(this).find('strong').text((stepValue*100).toFixed(0) + "%");
                    }).stop();
                }
            });
        }












"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeSlideComponent = (function () {
    function HomeSlideComponent() {
    }
    HomeSlideComponent.prototype.ngOnInit = function () {
        jQuery(document).ready(function ($) {
            //cache DOM elements
            var projectsContainer = $('.cd-projects-container'), projectsPreviewWrapper = projectsContainer.find('.cd-projects-previews'), projectPreviews = projectsPreviewWrapper.children('li'), projects = projectsContainer.find('.cd-projects'), navigationTrigger = $('.cd-nav-trigger'), navigation = $('.cd-primary-nav'), 
            //if browser doesn't support CSS transitions...
            transitionsNotSupported = ($('.no-csstransitions').length > 0);
            var animating = false, 
            //will be used to extract random numbers for projects slide up/slide down effect
            numRandoms = projects.find('li').length, uniqueRandoms = [];
            //open project
            projectsPreviewWrapper.on('click', 'a', function (event) {
                event.preventDefault();
                if (animating == false) {
                    animating = true;
                    navigationTrigger.add(projectsContainer).addClass('project-open');
                    openProject($(this).parent('li'));
                }
            });
            navigationTrigger.on('click', function (event) {
                event.preventDefault();
                if (animating == false) {
                    animating = true;
                    if (navigationTrigger.hasClass('project-open')) {
                        //close visible project
                        navigationTrigger.add(projectsContainer).removeClass('project-open');
                        closeProject();
                    }
                    else if (navigationTrigger.hasClass('nav-visible')) {
                        //close main navigation
                        navigationTrigger.removeClass('nav-visible');
                        navigation.removeClass('nav-clickable nav-visible');
                        if (transitionsNotSupported)
                            projectPreviews.removeClass('slide-out');
                        else
                            slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, false);
                    }
                    else {
                        //open main navigation
                        navigationTrigger.addClass('nav-visible');
                        navigation.addClass('nav-visible');
                        if (transitionsNotSupported)
                            projectPreviews.addClass('slide-out');
                        else
                            slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, true);
                    }
                }
                if (transitionsNotSupported)
                    animating = false;
            });
            //scroll down to project info
            projectsContainer.on('click', '.scroll', function () {
                projectsContainer.animate({ 'scrollTop': $(window).height() }, 500);
            });
            //check if background-images have been loaded and show project previews
            projectPreviews.children('a').bgLoaded({
                afterLoaded: function () {
                    showPreview(projectPreviews.eq(0));
                }
            });
            function showPreview(projectPreview) {
                if (projectPreview.length > 0) {
                    setTimeout(function () {
                        projectPreview.addClass('bg-loaded');
                        showPreview(projectPreview.next());
                    }, 150);
                }
            }
            function openProject(projectPreview) {
                var projectIndex = projectPreview.index();
                projects.children('li').eq(projectIndex).add(projectPreview).addClass('selected');
                if (transitionsNotSupported) {
                    projectPreviews.addClass('slide-out').removeClass('selected');
                    projects.children('li').eq(projectIndex).addClass('content-visible');
                    animating = false;
                }
                else {
                    slideToggleProjects(projectPreviews, projectIndex, 0, true);
                }
            }
            function closeProject() {
                projects.find('.selected').removeClass('selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $(this).removeClass('content-visible').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                    slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, false);
                });
                //if browser doesn't support CSS transitions...
                if (transitionsNotSupported) {
                    projectPreviews.removeClass('slide-out');
                    projects.find('.content-visible').removeClass('content-visible');
                    animating = false;
                }
            }
            function slideToggleProjects(projectsPreviewWrapper, projectIndex, index, bool) {
                if (index == 0)
                    createArrayRandom();
                if (projectIndex != -1 && index == 0)
                    index = 1;
                var randomProjectIndex = makeUniqueRandom();
                if (randomProjectIndex == projectIndex)
                    randomProjectIndex = makeUniqueRandom();
                if (index < numRandoms - 1) {
                    projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool);
                    setTimeout(function () {
                        //animate next preview project
                        slideToggleProjects(projectsPreviewWrapper, projectIndex, index + 1, bool);
                    }, 150);
                }
                else if (index == numRandoms - 1) {
                    //this is the last project preview to be animated 
                    projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                        if (projectIndex != -1) {
                            projects.children('li.selected').addClass('content-visible');
                            projectsPreviewWrapper.eq(projectIndex).addClass('slide-out').removeClass('selected');
                        }
                        else if (navigation.hasClass('nav-visible') && bool) {
                            navigation.addClass('nav-clickable');
                        }
                        projectsPreviewWrapper.eq(randomProjectIndex).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                        animating = false;
                    });
                }
            }
            //http://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
            function makeUniqueRandom() {
                var index = Math.floor(Math.random() * uniqueRandoms.length);
                var val = uniqueRandoms[index];
                // now remove that value from the array
                uniqueRandoms.splice(index, 1);
                return val;
            }
            function createArrayRandom() {
                //reset array
                uniqueRandoms.length = 0;
                for (var i = 0; i < numRandoms; i++) {
                    uniqueRandoms.push(i);
                }
            }
        });
        /*
        * BG Loaded
        * Copyright (c) 2014 Jonathan Catmull
        * Licensed under the MIT license.
        */
        (function ($) {
            $.fn.bgLoaded = function (custom) {
                var self = this;
                // Default plugin settings
                var defaults = {
                    afterLoaded: function () {
                        this.addClass('bg-loaded');
                    }
                };
                // Merge default and user settings
                var settings = $.extend({}, defaults, custom);
                // Loop through element
                self.each(function () {
                    var $this = $(this), bgImgs = $this.css('background-image').split(', ');
                    $this.data('loaded-count', 0);
                    $.each(bgImgs, function (key, value) {
                        var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                        $('<img/>').attr('src', img).load(function () {
                            $(this).remove(); // prevent memory leaks
                            $this.data('loaded-count', $this.data('loaded-count') + 1);
                            if ($this.data('loaded-count') >= bgImgs.length) {
                                settings.afterLoaded.call($this);
                            }
                        });
                    });
                });
            };
        })(jQuery);
    };
    return HomeSlideComponent;
}());
HomeSlideComponent = __decorate([
    core_1.Component({
        selector: 'homecomponent',
        template: "\n\n      <a class=\"cd-nav-trigger cd-text-replace\" href=\"#primary-nav\">Menu<span aria-hidden=\"true\" class=\"cd-icon\"></span></a>\n  \n  <div class=\"cd-projects-container\">\n    <ul class=\"cd-projects-previews\">\n      <li>\n        <a href=\"#0\">\n          <div class=\"cd-project-title\">\n            <h2>Project 1</h2>\n            <p>Brief description of the project here</p>\n          </div>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"#0\">\n          <div class=\"cd-project-title\">\n            <h2>Project 2</h2>\n            <p>Brief description of the project here</p>\n          </div>\n        </a>\n      </li>\n      \n      <li>\n        <a href=\"#0\">\n          <div class=\"cd-project-title\">\n            <h2>Project 3</h2>\n            <p>Brief description of the project here</p>\n          </div>\n        </a>\n      </li>\n      \n      <li>\n        <a href=\"#0\">\n          <div class=\"cd-project-title\">\n            <h2>Project 4</h2>\n            <p>Brief description of the project here</p>\n          </div>\n        </a>\n      </li>\n    </ul> <!-- .cd-projects-previews -->\n\n    <ul class=\"cd-projects\">\n      <li>\n        <div class=\"preview-image\">\n          <div class=\"cd-project-title\">\n            <h2>Project 1</h2>\n            <p>Brief description of the project here</p>\n          </div> \n        </div>\n\n        <div class=\"cd-project-info\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n          </p>\n        </div> <!-- .cd-project-info -->\n      </li>\n\n      <li>\n        <div class=\"preview-image\">\n          <div class=\"cd-project-title\">\n            <h2>Project 2</h2>\n            <p>Brief description of the project here</p>\n          </div> \n        </div>\n\n        <div class=\"cd-project-info\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n          </p>\n        </div> <!-- .cd-project-info -->\n      </li>\n\n      <li>\n        <div class=\"preview-image\">\n          <div class=\"cd-project-title\">\n            <h2>Project 3</h2>\n            <p>Brief description of the project here</p>\n          </div> \n        </div>\n\n        <div class=\"cd-project-info\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n          </p>\n        </div> <!-- .cd-project-info -->\n      </li>\n\n      <li>\n        <div class=\"preview-image\">\n          <div class=\"cd-project-title\">\n            <h2>Project 4</h2>\n            <p>Brief description of the project here</p>\n          </div> \n        </div>\n\n        <div class=\"cd-project-info\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quod dicta aliquid nemo repellendus distinctio minus dolor aperiam suscipit, ea enim accusantium, deleniti qui sequi sint nihil modi amet eligendi, quidem animi error labore voluptatibus sed. Qui magnam labore, iusto nostrum. Praesentium non, impedit accusantium consequatur officia architecto, mollitia placeat aperiam tenetur pariatur voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus recusandae ratione vitae amet distinctio, voluptas, minus vero expedita ea fugit similique sit cumque ad id facere? Ab quas, odio neque quis ratione. Natus labore sit esse, porro placeat eum hic.\n          </p>\n        </div> <!-- .cd-project-info -->\n      </li>\n    </ul> <!-- .cd-projects -->\n\n    <button class=\"scroll cd-text-replace\">Scroll</button>\n  </div> <!-- .cd-project-container -->\n\n  <nav class=\"cd-primary-nav\" id=\"primary-nav\">\n    <ul>\n      <li class=\"cd-label\">Navigation</li>\n      <li><a href=\"#0\">The team</a></li>\n      <li><a href=\"#0\">Our services</a></li>\n      <li><a href=\"#0\">Our projects</a></li>\n      <li><a href=\"#0\">Contact us</a></li>\n    </ul>\n  </nav>\n\n\n      ",
        styleUrls: ['app/homeslide.component.css']
    })
], HomeSlideComponent);
exports.HomeSlideComponent = HomeSlideComponent;
//# sourceMappingURL=homeslide.component.js.map
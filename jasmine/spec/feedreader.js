/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('urls are defined', function(){
          for (var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].url).toBeDefined("length");
            expect(allFeeds[i].url.length > 0).toBe(true);
          }
        });

        it('names are defined', function(){
          for (var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined("name");
            expect(allFeeds[i].name.length > 0).toBe(true);
          }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
      it('menu is hidden by default', function(){
        expect($('body').hasClass("menu-hidden")).toBe(true);
      })

      it('menu changes visibilty when clicked', function(){
        $('.menu-icon-link').trigger("click");
        expect($('body').hasClass("menu-hidden")).toBe(false);
        $('.menu-icon-link').trigger("click");
        expect($('body').hasClass("menu-hidden")).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
      beforeEach(function(done){
        loadFeed(0,function(){
          done();
        });
        });
        it('single .entry element or more',function(){
          expect($('.entry').length > 0).toBe(true);
      })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      var $content1, $content2
      beforeEach(function(done){
        $content1 = $(".entry")[0];
        loadFeed(1,function(){
          $content2 = $(".entry")[0];
          done();
        });
      });
      it('content should change when new feed is loaded', function(){
          console.log($(".entry")[0]);
          expect($content1 != $content2).toBe(true);
    });

});
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

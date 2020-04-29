var demo = new Vue({
    el: '#main',
    data: {
      searchString: "",
      // The data model. These items would normally be requested via AJAX,
      // but are hardcoded here for simplicity.
      articles: [
        {
          "title": "What You Need To Know About CSS Variables",
          "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBuM7hlJpdELwq0BSo01For8Ed0wCXQAHV9jHq-_PzRH6wF91"
        },
        {
          "title": "Freebie: 4 Great Looking Pricing Tables",
          "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH-xAQQDlwpR_Nig66fspeYA2QvSAoZmwn6RNgIk7aigHxBEi"
        },
        {
          "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
          "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIbs1cmJ4QeVKRQE4c_A_RZ_HJvkHRKudCBcTgerI7kmw0yPjSg"
        },
        {
          "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
          "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltg_0PzWsXoBeIg7iqNwbruKI9WgXT2AzhR1BZM7Mim2TMdH0cA"
        },
        {
          "title": "Learn SQL In 20 Minutes",
          "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaAHyHFL4NobdtmsGDoEUovpEptRWqTlvmiUCyf0jfG4bW-Pa4A"
        },
        {
          "title": "Creating Your First Desktop App With HTML, JS and Electron",
          "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApR5hqB7iBddDFcXRprwlk60yfBk9dOxpAHcAC_4rDl27sYj-"
        }
      ]
    },
    computed: {
      // A computed property that holds only those articles that match the searchString.
      filteredArticles: function () {
        var articles_array = this.articles,
          searchString = this.searchString;
        if(!searchString){
          return articles_array;
        }
        searchString = searchString.trim().toLowerCase();
        articles_array = articles_array.filter(function(item){
          if(item.title.toLowerCase().indexOf(searchString) !== -1){
            return item;
          }
        })
        // Return an array with the filtered data.
        return articles_array;;
      }
    }
  });
  
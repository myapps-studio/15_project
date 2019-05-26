var element = React.createElement('div', {}, 'Hello world!');
var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'harry.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'krollew.jpg'
    },
    {
      id: 3,
      title: 'Czerwony kapturek',
      desc: 'Film o czerwonym kapturku',
      img: 'kapturek.jpeg'
    },
    {
      id: 4,
      title: 'Muminki',
      desc: 'Film o muminkach',
      img: 'muminki.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));


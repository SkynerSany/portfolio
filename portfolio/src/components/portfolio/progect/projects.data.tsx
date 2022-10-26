interface projectsType {
  id: number,
  name: string,
  poster: string,
  link: string,
  technology: string[],
  adaptive: boolean,
  pageCount: string,
}

const projects: projectsType[] = [
  {
    id: 1,
    name: 'Movies collection',
    poster: '../../assets/images/movies-collection.png',
    link: '../../projects/movies-collection/index.html',
    technology: [
      'react',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page'
  },
  {
    id: 2,
    name: 'Gem puzzle',
    poster: '../../assets/images/gem-puzzle.png',
    link: '../../projects/gem-puzzle/index.html',
    technology: [
      'js',
      'sass'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 3,
    name: 'To Do List',
    poster: '../../assets/images/todo-list.png',
    link: '../../projects/todo-list/index.html',
    technology: [
      'js',
      'sass'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 4,
    name: 'Online zoo',
    poster: '../../assets/images/online-zoo.png',
    link: '../../projects/online-zoo/pajes/main/index.html',
    technology: [
      'js',
      'sass'
    ],
    adaptive: true,
    pageCount: '2'
  },
  {
    id: 5,
    name: 'Weather',
    poster: '../../assets/images/weather.png',
    link: '../../projects/weather/index.html',
    technology: [
      'js',
      'sass'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 6,
    name: 'Momentum',
    poster: '../../assets/images/momentum.png',
    link: '../../projects/momentum/index.html',
    technology: [
      'js',
      'sass'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 7,
    name: 'Repair design',
    poster: '../../assets/images/repair-design.png',
    link: '../../projects/repair-design/index.html',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 8,
    name: 'Shelter',
    poster: '../../assets/images/shelter.png',
    link: '../../projects/shelter/index.html',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: '2'
  },
  {
    id: 9,
    name: 'Interno',
    poster: '../../assets/images/interno.png',
    link: '../../projects/interno/index.html',
    technology: [
      'css'
    ],
    adaptive: true,
    pageCount: 'single page'
  },
  {
    id: 10,
    name: 'Webdev',
    poster: '../../assets/images/webdev.png',
    link: '../../projects/webdev/index.html',
    technology: [
      'css'
    ],
    adaptive: false,
    pageCount: 'single page'
  },
];

export {projects}
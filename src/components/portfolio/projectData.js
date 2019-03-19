const projectData = [
  { 
    id: 1,
    name: 'Backpaca',
    description: 'Bacpaca is a web application that allows users to visualize their travel experiences and plan future adventures with their friends.',
    links: [{text: 'Website', href: 'https://backpaca.app/', id: 'backpaca-app'}, {text: 'Repository', href: 'https://github.com/Lambda-School-Labs/labs9-map-scratcher/', id: 'backpaca-repo'}],
    stack: "Built with React, Apollo Client, GraphQL Yoga, and Prisma.",
    gif: 'backpaca.png'
  },
  { 
    id: 2,
    name: 'Recipes',
    description: 'A simple place to store your favorite recipes.',
    links: [{text: 'Website', href: 'https://recipes.lola.codes/', id: 'cookin-app'}, {text: 'Repository', href: 'https://github.com/lolax/L-L-Recipes', id: 'cookin-repo'}],
    stack: "Built with Vue, Express, Node, PostgreSQL, and firebase.",
    gif: 'recipes.png'
  },
  { 
    id: 3,
    name: 'Notes',
    description: 'A minimalist notes application where you can search, add, update, clone, and delete your notes.',
    links: [{text: 'Website', href: 'https://notes.lola.codes/', id: 'notes-app'}, {text: 'Backend Repository', href: 'https://github.com/lolax/back-end-project-week', id: 'notes-backend'}, {text: 'Frontend Repository', href: 'https://github.com/lolax/notes-frontend', id: 'notes-frontend'}],
    stack: "Built with Vue, Express, Node, PostgreSQL, and firebase.",
    gif: 'notes.png'
  },
]

export default projectData
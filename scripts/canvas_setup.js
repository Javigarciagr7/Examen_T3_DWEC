export{ctx, width, height}; 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 1º ERROR, hay escritos 2 innerHeight cuando uno de ellos no corresponde y debe ser innerWidth
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://eat24-backend.onrender.com' : '/';

// axios.defaults.baseURL =
// process.env.NODE_ENV !== 'production' ? 'http://localhost:5500' : '/';
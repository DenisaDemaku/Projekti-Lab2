import './initializers/index.js'
import { app } from './index.js';

app.listen(5005, () => {
    console.log(`Server is up and running on port http://localhost:5005`)
})
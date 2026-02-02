import { App } from './app'
import { ProductRoute } from './routes/product.routes'
import { AuthRoute } from './routes/auth.routes'

const app = new App([
    new ProductRoute(),
    new AuthRoute(),
])

app.listen()

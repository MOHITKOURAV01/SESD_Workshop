import { App } from './app'
import { TodoRoute } from './routes/todo.routes'

const app = new App([
    new TodoRoute(),
])

app.listen()

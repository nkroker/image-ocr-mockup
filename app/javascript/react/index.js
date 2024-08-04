import { define } from 'remount'
import Hello from "./components/Hello"
import Dashboard from './components/Dashboard'

define({ 'hello-component': Hello });
define({ 'app-component': Dashboard });

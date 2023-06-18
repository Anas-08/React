
import { createRoot } from 'react-dom/client'

// importing app
import App from './App'

const div = document.querySelector(".root");
const root = createRoot(div);
root.render(<App />);
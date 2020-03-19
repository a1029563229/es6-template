// /* eslint-disable */
// import './src/main.jsx';

export async function bootstrap() {
  console.log('jquery app bootstraped');
}

export function mount(props) {
  console.log("juqery mount", props);
}

export async function unmount() {
  console.log("jquery unmount");
}
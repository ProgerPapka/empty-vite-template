import 'normalize.css';
import './index.less';

const cur_button = document.getElementById('button_scroll');
const cur_topic = document.getElementById('title_for_btn');

cur_button.addEventListener('click', (e) => {
  cur_topic.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});
